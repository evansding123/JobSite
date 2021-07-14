import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PromotionBody = styled.div`
  padding-left: 3vw;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const useStyles = makeStyles({
  root: {
    width: '86vw',
    height: '30vw',
    backgroundColor: '#274358',
    padding: '2vw',
    display: 'flex',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: '28vw',
    width: '45vw',
    borderRadius: '4px',
  },
  title: {
    fontSize: '2vw',
  },
  body: {
    padding: '2vw 3vw',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#192A34',
    color: '#FFFFFF',
    border: '2px solid #799496',
    borderRadius: '50px',
    padding: '0.75vw 11.5vw',
    marginTop: '2vw',
    fontSize: '1.3vw',
  },
});

const promotionTitle = `Introducing the new JobSite Calendar Tool`;
const promotionBody = `We have been working hard to make changes behind the scenes and to deliver you a better experience - all so you can more easily find the right fit.`;

const Promotion = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="./img/calendartool.png"
        title="calendartool"
      />
      <PromotionBody>
        <Typography gutterBottom variant="h4" className={classes.title}>
          {promotionTitle}
        </Typography>
        <Typography gutterBottom variant="h5" className={classes.body}>
          {promotionBody}
        </Typography>
        <Button className={classes.button} variant="outlined">
          CREATE YOUR ACCOUNT
        </Button>
      </PromotionBody>
    </Card>
  )
}

export default Promotion;