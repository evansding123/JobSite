import React, { useStatem, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useAuth }  from '../src/contexts/AuthContext.js';

// const innerList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
// `;

const Note = styled.div`
  font-family: Helvetica;
  color: #ffffff;
  border: 0.5px solid #2e5275;
  padding: 16px;
  background: linear-gradient(to bottom right, #274358, #274354);
  box-shadow: 1px;
`;

const fontWrap = styled.div`
  font-family: Helvetica;
`
const NoteText = styled.div`
  overflow: hidden;
  height: 3vh;
`;

const NoteDate = styled.div`
  padding-top: 3%;
`;

const useStyles = makeStyles((theme) => ({
  text: {
    height: '13vh',
    color: '#ffffff',
    padding: '16px',
    background: '#274358',
    overflow: 'hidden',
    alignItems: 'start',
    '&:hover': {
      background: '#214e6b',
    }
  },
  button: {
    width: '100%',
    color: '#ffffff',
    background: 'linear-gradient(to bottom right, #274358, #274354)',
    outline: 'white',
  },
  list: {
    padding: '0',
  }
}));

export default function NotesList({ notes, setCurrent }) {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const notesList = notes.map(({ note, date }, i) => (
    <div key={i}>
    <ListItem
      className={classes.text}
      button
      onClick={() => {setCurrent(note)}}
    >
      <ListItemText>
        <NoteText>
          {note}
        </NoteText>
        <NoteDate>
          {date}
        </NoteDate>
      </ListItemText>
    </ListItem>
      <Divider />
    </div>
  ));

  return (
    <div>
      <Button className={classes.button} variant="outlined" onClick={() => {setCurrent(false)}}>
        + New Note
      </Button>
      <List className={classes.list}>
        {notesList}
      </List>
    </div>
  )
};