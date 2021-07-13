import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../src/contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

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
    <h3>Log In</h3>
    {error && <div>{ error }</div>}
    <form className={classes.root} onSubmit={handleSubmit}>
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
        <Link to='/'>
          <Button variant="contained">
            Cancel
          </Button>
        </Link>
        <Button type="submit" disabled={loading} variant="contained" color="primary">
          Log In
        </Button>
      </div>
    </form>
    <div> Need an account? <Link to='/signup'> Sign Up </Link></div>
  </>
  );
}

export default Login;
