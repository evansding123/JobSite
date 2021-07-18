import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NotesMain from './NotesMain.jsx';
import NotesList from './NotesList.jsx';
import { useAuth } from '../src/contexts/AuthContext.js';

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
  const [notes, setNotes] = useState([]);
  const [current, setCurrent] = useState({ note: ''});
  const { currentUser } = useAuth();
  const [display, setDisplay] = useState(false);

  const getAllNotes = async () => {
    try {
      const response = await axios.get('/notes/getnote');
      setNotes(response.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getAllNotes();
  }, [])

  return (
    <Tester>
      <List>
        <NotesList notes={notes} setCurrent={setCurrent} setDisplay={setDisplay}/>
      </List>
      <NotesMain display={display} current={current} getAllNotes={getAllNotes} setCurrent={setCurrent}/>
    </Tester>
  )
};