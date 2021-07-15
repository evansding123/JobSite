import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import { shadows } from '@material-ui/system';
import { spacing, palette } from '@material-ui/system';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const getModalStyle = () => {
  const top = 50;
  const left = 50;

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
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10,
    color: '#E9EB9E'
  },
  input: {
    color: '#FFFFFF',
    backgroundColor: '#49475B'
  },
  bottom: {
    marginBottom: 10
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
<<<<<<< HEAD
  const [text, addText] = useState('');
=======

>>>>>>> main
  const [eventDate, addEvent] = useState(new Date());
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(true);
  const [formInfo, setFormInfo] = useState({
<<<<<<< HEAD
    username: 'purpleswan857',
=======
    email: 'laertes.ferreira@example.com', //change to auth email
>>>>>>> main
    time: props.date.substring(0,16)
  });

  let dateString = '';


  if (props.date !== undefined) {
    dateString = props.date.substring(0,16);
    //visualDate = props.visualdate ....
  }

  const handleClose = () => {
    setOpen(false);
    props.callback(false);
  };

  const handleChange = (event) => {
<<<<<<< HEAD
=======

    const obj = {
      [event.target.name]: event.target.value,
    }
    //console.log(obj);
    setFormInfo(formInfo => {
      formInfo[event.target.name] = event.target.value
      return formInfo;
  });
>>>>>>> main

    const obj = {
      [event.target.name]: event.target.value,
    }
    setFormInfo(formInfo => {
      formInfo[event.target.name] = event.target.value
      return formInfo;
  });
    //addText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    console.log('submitted');
    axios.post('/notification/addnotification', formInfo)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
=======
    console.log(formInfo);
    axios.post('/notification/addnotification', formInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
>>>>>>> main
  }

  const handleDate = (event) => {
    addEvent();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p>{dateString}</p>

      <form onSubmit={handleSubmit}>
        <CssTextField className = {classes.bottom} onChange={handleChange} id="standard-basic" label="Add title" name = 'title'/>

        <CssTextField
              id="datetime-local"
              type="datetime-local"
              defaultValue={dateString}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name="time"
              onChange={handleChange}
         />
        <CssTextField onChange={handleChange} id="standard-basic" label="Add guests" name="guests"/>
        <br/>
        <CssTextField onChange={handleChange}  name="location" id="standard-basic" label="Add location" />
        <br/>
        <CssTextField onChange={handleChange}  name="description" id="standard-basic" label="Description" />
        <Box mt = {3}>
          <Button className={classes.input} type='submit' >Add Event</Button>
        </Box>
      </form>
    </div>
  );

  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </Box>

  );
}




export default PopUp;

