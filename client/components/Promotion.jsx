import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const PromotionBody = styled.div`
  padding-left: 3vw;
  width: 40vw;
  margin: auto;
`;

const useStyles = makeStyles({
  root: {
    width: '90vw',
    height: '30vw',
    margin: '6vw',
    backgroundColor: '#274358',
    padding: '3vw',
    display: 'flex',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: '30vw',
    width: '45vw',
  },
  title: {
    height: '35vw',
    width: '50vw',
    margin: '13vw',
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
      <PromotionBody>
        <Typography gutterBottom variant="h5" component="h2">
          {promotionTitle}
        </Typography>
        <Typography gutterBottom variant="h5" component="h4">
          {promotionBody}
        </Typography>
      </PromotionBody>
    </Card>
  )
}

export default Promotion;