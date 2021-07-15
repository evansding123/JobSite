import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NotesMain from './NotesMain.jsx';


const Tester = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 110vh;
  width: 100vh;
`;

const Hello = styled.div`
grid-column: 1;
grid-row: 1;
`;

const List = styled.div`
grid-column: 1 / 5;
grid-row: 1 / 12;
background: #274358;
`;

export default function NotesPage(props) {
  return (
    <Tester>
      <List>list</List>
      {/* <Hello>hello</Hello> */}
      <NotesMain/>
    </Tester>
  )
};