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
import Paper from '@material-ui/core/Paper';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  adaptiveHeight: true,
  arrows: false,
  appendDots: dots => (
    <div
      style={{
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "50px",
        color: "white",
        marginTop: '-30px',
        fontFamily: '\'Roboto\', sans-serif',
      }}
    >
      o
    </div>
  )
};

const useStyles = makeStyles({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    padding: 0,
    marginBottom: '20%',
    borderRadius: '10px 10px 10px 10px',
    background: 'linear-gradient(#313233, #192a34)',
    border: '1px solid #49475b',
    color: 'white',
    fontFamily: '\'Roboto\', sans-serif',
    height: '100%',
    fontSize: 14,
    marginLeft: '12%'
  },

  title: {
    display: 'flex',
    fontSize: 14,
    borderRadius: '5px',
    backgroundColor: '#405e74',
    justifyContent: 'center'
  },
  pos: {
    marginBottom: 0,

  },
  mail: {
    fontSize: 12
  },
  header: {
    display: 'flex',
    width: '95vw',
    background: 'linear-gradient(#313233, #192a34)',
    border: '1px solid #49475b',
    fontFamily: '\'Roboto\', sans-serif',
    color: 'white',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: '10px'
  }
});




const ApptInfo = (props) => {

  const classes = useStyles();


    let result =
     <Slider {...settings}>
       {props.data.map((item) => {
         let time = item.date.slice(0, item.date.length - 13) + item.start_time;
         console.log(time);
        return (
          <>
          <Card className = {classes.root} variant = 'outlined'>
            <CardContent>
              <Typography variant ='overline' className={classes.title}>{item.title}</Typography>
            </CardContent>
            <CardContent>
              <Typography className = {classes.pos} >
                {format(parseISO(item.date), 'MMMM do, yyyy')}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography className = {classes.pos}>
              {format(parseISO(time), 'p')}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography className={classes.mail}>
                {item.guests}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography className = {classes.pos}>
                {item.location}
              </Typography>
              </CardContent>
            <CardContent>
              <Typography className = {classes.pos} paragraph = {true}>
                {item.notification}
              </Typography>
              </CardContent>
          </Card>
          </>
        )
        })}
     </Slider>

  return (
    <div className = 'box'>
    <Paper className = {classes.header}><h4>Upcoming Events</h4></Paper>
    <div>{result}</div>
    </div>
  );
}




export default ApptInfo;

