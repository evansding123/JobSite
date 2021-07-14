import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    width: '90vw',
    height: '35vw',
    margin: '6vw',
    backgroundColor: '#274358',
    padding: '3vw',
  },
  media: {
    height: '35vw',
    width: '50vw',
    margin: 'auto',

  },
});

const Promotion = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="./img/calendartool.png"
        title="calendartool"
      />
    </Card>
  )
}

export default Promotion;