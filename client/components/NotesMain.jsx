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

export default function NotesMain({ current, getAllNotes }) {
  const classes = useStyles();
  const [newNote, setNewNote] = useState('');

  const updateNewNote = (event) => {
    setNewNote(event.target.value);
  }

  const addNewNote = async () => {
    if (newNote !== '') {
      try {
        //need to get the current logged in account_id to create a new note
        const response = await axios.post('/notes/addnote', [newNote, 1]);
        getAllNotes();
      } catch (error) {
        throw error;
      }
    }
  }

  return (
    <MainComponent>
      <Button onClick={addNewNote} className={classes.button} variant="outlined">Save Note</Button>
       { current ?
       (<div>
         {current}
       </div>) : (
       <TextareaAutosize placeholder="New note..."
        className={classes.textInput}
        onChange={updateNewNote}
       />
       )}
    </MainComponent>
  )
};