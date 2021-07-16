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
  slidesToScroll: 2,
  adaptiveHeight: false
};

const useStyles = makeStyles({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    padding: 0,
    marginBottom: '20%',
    borderRadius: '10px 10px 10px 10px',
    backgroundColor: 'grey',
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

  }
});




const ApptInfo = (props) => {

  const classes = useStyles();


    let result =
     <Slider {...settings}>
       {props.data.map((item) => {
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
              {format(parseISO(item.date), 'p')}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography color = 'textSecondary'className={classes.pos}>
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
    <div>{result}</div>
  );
}




export default ApptInfo;

