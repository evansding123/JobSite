import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
        console.log(exists)
        if (exists.data.length === 0) {
          try {
            //need to get the current logged in account_id to create a new note
            const created = new Date();
            let parts = created.toString().split(' ');
            const date = `${parts[1]} ${parts[2]} ${parts[3]} ${parts[4].slice(0, 5)}`
            const response = await axios.post('/notes/addnote', [current.note, 1, date]);
            console.log('hi', response);
            getAllNotes();
          } catch (error) {
            throw error;
          }
        } else {
          try {
            const response = await axios.put('/notes', [current.note, current.id, 1]);
            getAllNotes();
            console.log('hihi', response);

          } catch(error) {
            throw error;
          }
        }
      } catch(error) {
        throw error;
      }
    }
  }

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