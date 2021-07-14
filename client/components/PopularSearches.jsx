import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const PopularContainer = styled.div`
  border: 1px black;
`;

const CardContainer = styled.div`
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PopularSearches = (props) => {
  const classes = useStyles();
  const dummyData = [
    { id: 1, industry: 'HealthCare'},
    { id: 2, industry: 'Engineering'},
    { id: 3, industry: 'Service'},
    { id: 4, industry: 'Data Science'},
  ]
  return (
    <PopularContainer>
      {dummyData.map(({ id, industry }) => (
        <Card raised={true} key={id} className={classes.root}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
            image="./img/healthcare.png"
            title={industry}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {industry}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </PopularContainer>
  )
}

export default PopularSearches;
