import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../src/contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: '#e9eb9e',
    flexDirection: 'column',
    fontFamily: 'Helvetica',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#274358',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
      background: 'white'
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
      color: 'white',
      backgroundColor: '#49475B',
    },
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const firstNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const lastNameRef = useRef();
  const { signup } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value ){
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/')
    } catch {
      setError('Failed to create an account')
    }
  };

  return (
    <>
<div style={{height: '100vh', width: '100%', background: '#274358'}}>
      {error && <div>{ error }</div>}
      <form className={classes.root} onSubmit={handleSubmit}>
      <h3>Create An Account (it's free!)</h3>
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
          <Link to='/'>
            <Button variant="contained" onClick={()=> console.log('clicked')}>
              Cancel
            </Button>
          </Link>
          <Button type="submit" disabled={loading} variant="contained" color="primary">
            Signup
          </Button>
        </div>
        <div> Already signed up? <Link to="/login" style={{color:'white'}}>Log in</Link> here</div>
      </form>
      </div>
    </>
  );
};

export default Signup;
