import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NotesMain from './NotesMain.jsx';


const Tester = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100vh;
  width: 100vh;
`;

const Hello = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const List = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 12;
  background: #192A34;
`;

const innerList = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Note = styled.div`
  font-family: Helvetica;
  color: #ffffff;
  grid-column: 2 / 12;
  margin: 5px;
  padding: 5px;
  background: #274358;
  border-radius: 5px;
`;



export default function NotesPage(props) {
  const notes = Array(10).fill('"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?')
  const notesList = notes.map((note) => <Note><p>{note}</p></Note>);

  return (
    <Tester>
      <List>
        {notesList}
      </List>

      <NotesMain/>
    </Tester>
  )
};