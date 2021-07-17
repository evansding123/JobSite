import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

// const innerList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
// `;

const Note = styled.div`
  font-family: Helvetica;
  color: #ffffff;
  // margin: 12px;
  border: 0.5px solid #2e5275;
  padding: 16px;
  background: linear-gradient(to bottom right, #274358, #274354);
  //border-radius: 4px;
  box-shadow: 1px;
`;

const fontWrap = styled.div`
  font-family: Helvetica;
`

//#274358 //40
const Overflow = styled.div`
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: 'Helvetica',
    color: 'linear-gradient(to bottom right, #274358, #274354)',
    margin: '12px',
    padding: '16px',
    borderRadius: '4px',
  '&:hover': {
    position: 'relative',
    top: '-1px',
  },
  },
  text: {
    height: '13vh',
    color: '#ffffff',
    padding: '16px',
    background: '#274358',
    overflow: 'hidden',
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
    padding: '0'
  }
}));

export default function NotesList({ notes, setCurrent }) {
  const classes = useStyles();
  const fakeNotes = Array(10).fill('Take dog out')
  const notesList = notes.map(({ note }, i) => (
    <div key={i}>
    <ListItem
      className={classes.text}
      button
      onClick={() => {setCurrent(note)}}
    >
      <ListItemText>{note}</ListItemText>
    </ListItem>
      <Divider />
    </div>
  ));


  return (
    <Overflow>
      <Button className={classes.button} variant="outlined" onClick={() => {setCurrent(false)}}>
        + New Note
      </Button>
      <List className={classes.list}>
        {notesList}
      </List>
    </Overflow>
  )
};