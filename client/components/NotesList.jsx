import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    // backgroundColor: 'linear-gradient(to bottom right, #274358, #274354)',
    borderRadius: '4px',
  '&:hover': {
    position: 'relative',
    top: '-1px',
  },
  },
  text: {
    // fontFamily: 'Helvetica',
    color: '#ffffff',
    // margin: 12px;
    // border: '0.5px solid #2e5275';
    padding: '16px',
    background: 'linear-gradient(to bottom right, #274358, #274354)',
  },

}));


export default function NotesList({ notes, setCurrent }) {
  const classes = useStyles();
  const fakeNotes = Array(10).fill('"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?')
  const notesList = fakeNotes.map((note, i) => (
    <ListItem
      key={i}
      classes={classes.text}
    >
      <ListItemText>{note}</ListItemText>
    </ListItem>
  ));
  // <Paper className={classes.paper} elevation={5}><p>{note}</p></Paper>
  return (
    <Overflow>
      <List>
        {notesList}
      </List>
    </Overflow>
  )
};