import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      color: '#E9EB9E',
      borderColor: '#E9EB9E'
    },
    '& .MuiInput-underline:after': {
      borderColor: '#E9EB9E',
    },
  },
}));


const PopUp = (props) => {

  const classes = useStyles();

  const [text, addText] = useState('');



  const handleChange = (event) => {
    addText(event.target.value);

  }

  const handleSubmit = (event) => {
    axios.post('/post', {
      date: props.date,
      text: event.target.value,
      //what do we need to send a post request?
    })
  }


  return(
    <Box className = 'popUp'>
    <Button variant = 'contained'>Add Event</Button>
    <p>{props.date}</p>
    <form className = {classes.root} onChange = {handleChange}>
      <CssTextField className = {classes.margin} value = {text} id="outlined-basic" label="please add event" variant="outlined"
      InputProps={{
        classes: {
          root: classes.root
        }
      }}
      />
    </form>
    <p>{text}</p>


    </Box>
  );

}



export default PopUp;