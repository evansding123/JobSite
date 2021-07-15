import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const fakeReviews = [
  {
    id: 1,
    review: 'Jobsite makes it so easy to reach a large, targeted candidate pool in a short amount of time',
    name: 'Evans Ding',
  },
  {
    id: 2,
    review: 'We have found so many quality candidates on Jobsite than we have on competitor sites',
    name: 'John Yasis',
  },
  {
    id: 3,
    review: 'Jobsite means more than job postings for us. It is their technology and support that really make them a true partner',
    name: 'Brandon Parker',
  }
];

const useStyles = makeStyles(() => ({
  root: {

  },
}));

export default function EmployerReviews() {
  const classes = useStyles();

  return (
    <div id="employer-reviews">

    </div>
  );
}