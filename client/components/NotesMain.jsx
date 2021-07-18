import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useAuth } from '../src/contexts/AuthContext.js';

const MainComponent = styled.div`
  grid-row: 1 / 12;
  grid-column: 5 / 13;
  border: 1px solid #263d54;
  background-color: white;
`;

const useStyles = makeStyles(() => ({
  button: {
    width: '100%',
  },
  textInput: {
    width: '100%',
    maxHeight: '100%',
    border: 'white',
    resize: 'none',
    outline: 'none',
    fontFamily: 'Roboto',
    padding: '2%',
  }
}));

export default function NotesMain({ display, getAllNotes, current, setCurrent }) {
  const classes = useStyles();
  const [accountId, setAccountId] = useState('');
  const { currentUser } = useAuth();

  const createAccount = async () => {
    try {
      const userInfo = ['fake', 'name', currentUser.email, 0, 0, '',];
      try {
        const accountInfo = await axios.get(`/accounts/${currentUser.email}`);
        setAccountId(accountInfo.data[0].id);
        if (accountInfo.data.length === 0) {
          try {
            await axios.post(`/accounts/addaccount`, userInfo);
          } catch(error) {
            throw error;
          }
        }
      } catch(error) {
        throw error;
      }
    } catch(error) {
      throw error;
    }
  }

  const updateNewNote = (event) => {
    let newNote = current;
    newNote['note'] = event.target.value;
    setCurrent({
      ...current,
      ...newNote
    });
  }

  const addNewNote = async () => {
    if (current !== '') {
      try {
        const exists = await axios.get(`/notes/getnote/${current.id}/${current.accounts_id}`);
        const created = new Date();
        let parts = created.toString().split(' ');
        var date = `${parts[1]} ${parts[2]} ${parts[3]} ${parts[4].slice(0, 5)}`;

        if (exists.data.length === 0) {
          try {
            const response = await axios.post('/notes/addnote', [current.note, accountId, date]);
            getAllNotes();
          } catch (error) {
            throw error;
          }
        } else {
          try {
            const response = await axios.put('/notes', [current.note, date, current.id, accountId]);
            getAllNotes();
          } catch(error) {
            throw error;
          }
        }
      } catch(error) {
        throw error;
      }
    }
  }

  useEffect(() => {
    createAccount();
  }, []);

  return (
    <MainComponent>
      <Button onClick={addNewNote} className={classes.button} variant="outlined">Save Note</Button>
       { display ?
       (<TextareaAutosize value={current.note} className={classes.textInput} onChange={updateNewNote}/> ) : (
       <TextareaAutosize value={current.note} placeholder="New note..."
        className={classes.textInput}
        onChange={updateNewNote}
       />
       )}
    </MainComponent>
  )
};