import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// const innerList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
// `;

const Note = styled.div`
  font-family: Helvetica;
  color: #ffffff;
  margin: 10px;
  padding: 5px;
  background: #274358;
  border-radius: 5px;
`;

const Overflow = styled.div`
`;

export default function NotesList(props) {
  const notes = Array(10).fill('"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?')
  const notesList = notes.map((note) => <Note><p>{note}</p></Note>);
  return (
    <Overflow>
      {notesList}
    </Overflow>
  )
};