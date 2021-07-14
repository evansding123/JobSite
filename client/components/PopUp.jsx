import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import { spacing, palette } from '@material-ui/system';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import axios from 'axios';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#274358',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    color: '#E9EB9E'
  },
  input: {
    color: '#E9EB9E',
    backgroundColor: '#192a34'
  }
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#E9EB9E',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E9EB9E',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E9EB9E',
      },
      '&:hover fieldset': {
        borderColor: '#E9EB9E',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E9EB9E',
      },
    },
  },
})(TextField);




const PopUp = (props) => {
  const classes = useStyles();
  const [text, addText] = useState('');
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(true);

  let dateString = '';

  if(props.date !== undefined) {
    dateString = props.date.substring(0,props.date.length);
  }


  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    props.callback(false);
  };

  const handleChange = (event) => {
    addText(event.target.value);

  }

  const handleSubmit = (event) => {
    console.log('submitted');
    axios.post('/post', {
      date: props.date,
      text: text
      //what do we need to send a post request?
      //date, industry, message, remote,
    })
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p>{dateString}</p>
      <form onChange = {handleChange}>
        <CssTextField value = {text} id="outlined-basic" label="please add event" variant="outlined" />
        <Box mt = {3}>
          <Button className = {classes.input} type = 'submit' onSubmit = {handleSubmit}>Add Event</Button>
        </Box>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>

  );
}




export default PopUp;

