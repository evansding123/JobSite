import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../src/contexts/AuthContext';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const SignupModal = (props) => {
  const classes = useStyles();
  const firstNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const lastNameRef = useRef();
  const { signup, currentUser } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(firstNameRef, lastNameRef, emailRef, passwordRef);
    //handleClose(); modal close function

    if (passwordRef.current.value !== passwordConfirmRef.current.value ){
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account')
    }
  };


  /*
    TODO: Add component to a modal window component and pass down the "close modal" click handler to the cancel/submit buttons
  */




  return (
    <>
      <h3>Create An Account (it's free!)</h3>
      {error && <div>{ error }</div>}
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="filled"
          required
          type="text"
          inputRef={firstNameRef}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          type="text"
          inputRef={lastNameRef}
        />
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          inputRef={emailRef}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          inputRef={passwordRef}
        />
        <TextField
          label="Password Confirmation"
          variant="filled"
          type="password"
          required
          inputRef={passwordConfirmRef}
        />
        <div>
          <Button variant="contained" onClick={()=> console.log('clicked')}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
      <div> Already signed up? Log In here</div>
    </>
  );
};

export default SignupModal;
