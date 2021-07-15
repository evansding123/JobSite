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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Slider from 'react-slick';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




const ApptInfo = (props) => {

  const classes = useStyles();


  let result;

  if(props.data.length !== 0 ) {
     result =
     <Slider {...settings}>
       {props.data.map((item) => {
        return (
          <Card className = {classes.root} variant = 'outlined'>
          <CardContent>{item.title}</CardContent>
          <CardContent>{item.date}</CardContent>
          <CardContent>{item.start_time}</CardContent>
          <CardContent>{item.end_time}</CardContent>
          <CardContent>{item.guests}</CardContent>
          <CardContent>{item.location}</CardContent>
          <CardContent>{item.notification}</CardContent>
          </Card>
        )
        })}
     </Slider>
  } else {
    result = <div></div>
  }
  return (
    <div>{result}</div>

  );
}




export default ApptInfo;

