import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import MyEditor from './TextEditor.jsx';


const MainComponent = styled.div`
  grid-row: 1 / 12;
  grid-column: 5 / 13;
  border: 1px solid #263d54;
`;
export default function NotesMain(props) {
  return (
    <MainComponent>
      <MyEditor />
    </MainComponent>
  )
};