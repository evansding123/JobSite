import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import MyEditor from './TextEditor.jsx';

const MainComponent = styled.div`
  display: flex;
  height: 500px;
`;
export default function NotesMain(props) {
  return (
    <MainComponent>
      <MyEditor />
    </MainComponent>
  )
};