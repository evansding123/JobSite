import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// const innerList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
// `;

const Note = styled.div`
  font-family: Helvetica;
  color: #ffffff;
  margin: 12px;
  padding: 16px;
  background: linear-gradient(to bottom right, #274358, #274354);
  border-radius: 4px;
`;

const fontWrap = styled.div`
  font-family: Helvetica;
`

//#274358 //40
const Overflow = styled.div`
`;

const useStyles = makeStyles({
  paper: {
    fontFamily: 'Helvetica',
    color: '#ffffff',
    margin: '12px',
    padding: '16px',
    backgroundColor: 'linear-gradient(to bottom right, #274358, #274354)',
    borderRadius: '4px',
  '&:hover': {
    position: 'relative',
    top: '-1px',
  }
}});


export default function NotesList(props) {
  const classes = useStyles();
  const notes = Array(10).fill('"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?')
  const notesList = notes.map((note) => <Paper className={classes.paper} elevation={5}>{note}</Paper>);
  return (
    <Overflow>
      {notesList}
    </Overflow>
  )
};