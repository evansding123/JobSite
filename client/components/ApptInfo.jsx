import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const useStyles = makeStyles({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    padding: 0,
    marginBottom: 10,
    borderRadius: '10px 10px 10px 10px',
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
          <>
          <Card className = {classes.root} variant = 'outlined'>
            <CardContent>
              <Typography className={classes.title}>{item.title}</Typography>
            </CardContent>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary" >
                {format(parseISO(item.date), 'MMMM do, yyyy')}
              </Typography>
            </CardContent>
            <CardContent>{item.start_time}</CardContent>
            <CardContent>{item.end_time}</CardContent>
            <CardContent>{item.guests}</CardContent>
            <CardContent>{item.location}</CardContent>
            <CardContent>{item.notification}</CardContent>
          </Card>

          </>
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

