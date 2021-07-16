import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NotesMain from './NotesMain.jsx';
import NotesList from './NotesList.jsx';

const Tester = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 1fr));
  grid-template-rows: repeat(12, 1fr);
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
`;

const List = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 12;
  background: #192A34;
  overflow: auto;
`;

export default function NotesPage(props) {

  const getAllNotes = () => {

  }

  return (
    <Tester>
      <List>
        <NotesList/>
      </List>

      <NotesMain/>
    </Tester>
  )
};