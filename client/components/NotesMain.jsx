import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const MainComponent = styled.div`
  grid-row: 1 / 12;
  grid-column: 5 / 13;
  border: 1px solid #263d54;
  background-color: white;
`;

const useStyles = makeStyles(() => ({
  button: {
    width: '100%',
  },
}));

export default function NotesMain(props) {
  const classes = useStyles();
  const [editorState, setEditorState] = React.useState(() =>
  EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  const addNewNote = async () => {
    try {
      const response = await axios.get('/notes/getnote/:id');

    } catch(error) {
      throw error;
    }
  }

  return (
    <MainComponent>
      <Button onClick={addNewNote} className={classes.button} variant="outlined">Save Note</Button>
      <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={setEditorState}
      />
    </MainComponent>
  )
};