import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '90vw',
    height: '35vw',
    margin: '6vw',
    backgroundColor: '#274358',
    padding: '3vw',
    display: 'flex',
    color: '#FFFFFF',
  },
  media: {
    height: '35vw',
    width: '50vw',
    margin: 'auto',
  },
  title: {

  }
});

const promotionTitle = 'Introducing the new JobSite Calendar Tool';
const promotionBody = 'We have been working hard to make changes behind the scenes and to deliver you a better experience - all so you can more easily find the right fit.';

const Promotion = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="./img/calendartool.png"
        title="calendartool"
      />
      <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
        {promotionTitle}
        <Typography gutterBottom variant="h5" component="h4" className={classes.title}>
        {promotionBody}
        </Typography>
      </Typography>
    </Card>
  )
}

export default Promotion;