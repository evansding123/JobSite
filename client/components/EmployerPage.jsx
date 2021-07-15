import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import EmployerMainPhoto from './EmployerMainPhoto.jsx';
import EmployerReviews from './EmployerReviews.jsx';
import EmployerPromo from './EmployerPromo.jsx';


const useStyles = makeStyles(() => ({
  root: {

  },
}));

export default function EmployerPage() {
  const classes = useStyles();

  return (
    <div id="employer-landingpage">
      <EmployerMainPhoto/>
      <EmployerPromo />
      <div id="upsidedown-triangle"/>
      <EmployerReviews />
    </div>
  );
}
