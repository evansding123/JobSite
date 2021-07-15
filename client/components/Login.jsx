import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../src/contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: '#e9eb9e',
    fontFamily: 'Helvetica',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#274358',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      background: 'white',
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
      color: 'white',
      backgroundColor: '#49475B'
    },
  },
}));

function Login() {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to sign in')
    }
  };

  return (
    <>
    <div style={{height: '100vh', width: '100%', background: '#274358'}}>
    {error && <div>{ error }</div>}
    <form className={classes.root} onSubmit={handleSubmit}>
    <h3>Log In</h3>
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
      <div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant="contained">
            Cancel
          </Button>
        </Link>
        <Button type="submit" disabled={loading} variant="contained" color="primary">
          Log In
        </Button>
      </div>
      <div> Need an account? <Link to='/signup' style={{color: 'white'}}> Sign Up </Link></div>
    </form>
    </div>
  </>
  );
}

export default Login;
