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
  margin-top: 5%;
  display: flex;
`;

const CardContainer = styled.div`
`;

const useStyles = makeStyles({
  root: {
    width: '322px',
    height: '405px',
    left: '58px',
    top: '1034px',
    margin: '10px',
  },
  media: {
    height: 140,
  },
});

const PopularSearches = (props) => {
  const classes = useStyles();
  const dummyData = [
    { id: 1, industry: 'HealthCare', src: "./img/nurse.png"},
    { id: 2, industry: 'Engineering', src: "./img/engineering.png"},
    { id: 3, industry: 'Service', src: "./img/service.png"},
    { id: 4, industry: 'Data Science', src: "./img/datascience.png"},
  ]
  return (
    <PopularContainer>
      {dummyData.map(({ id, industry, src }) => (
        <Card raised={true} key={id} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={src}
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
