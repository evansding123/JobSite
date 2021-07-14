import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const PopularContainer = styled.div`
  margin-top: 4vw;
  margin: 3vw;
`;

const PopularCards = styled.div`
  margin-top: 3vw;
  display: flex;
`;

const PopularTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-left: 1vw;
  color: #FFFFFF;
`;

const useStyles = makeStyles({
  root: {
    width: '21vw',
    height: '30vw',
    marginRight: '1vw',
    marginLeft: '1vw',
  },
  media: {
    height: '25vw',
  },
  industry: {
    display: 'flex',
    justifyContent: 'center',
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
      <PopularTitle>
        Popular Searches
      </PopularTitle>
      <PopularCards>
        {dummyData.map(({ id, industry, src }) => (
          <Card raised={true} key={id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={src}
                title={industry}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.industry}>
                  {industry}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </PopularCards>
    </PopularContainer>
  )
}

export default PopularSearches;
