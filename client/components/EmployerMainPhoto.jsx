import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';


const EmployeeShowcase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 13vw;
  height: 80vh;
  color: white;
  font-size: 45px;
  background: rgba(0, 0, 0, .3);
  font-family: Roboto, Arial, Helvetica, sans-serif;
`;

const useStyles = makeStyles({
  button: {
    backgroundColor: '#363056',
    background: 'linear-gradient(180deg, #363056 30%, #4a496f 90%)',
    color: '#FFFFFF',
    border: '2px solid #799496',
    borderRadius: '50px',
    padding: '0.75vw 5vw',
    marginTop: '2vw',
    fontSize: '1.3vw',
  },
});

export default function EmployerMainPhoto(props) {
  const classes = useStyles();

  return (
    <div id="employer-showcase">
      <EmployeeShowcase>
        We're here to make
        <br />
        hiring a little easier.
        <br />
        Let's give it a try.
        <Link to='/signup' style={{ textDecoration: 'none' }}>
          <Button className={classes.button}  variant="outlined">
            POST JOBS FOR FREE
          </Button>
        </Link>
      </EmployeeShowcase>
    </div>
  );
}
