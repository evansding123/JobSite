import React from 'react';
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

const PopularSearches = (props) => {
const dummyData = [
  { id: 1, service: 'HealthCare'},
  { id: 2, service: 'Engineering'},
  { id: 3, service: 'Service'},
  { id: 4, service: 'Data Science'},
]
  return (
    <PopularContainer>
      {dummyData.map(({ id }) => (
        <Card raised={true} key={id}>
          <CardActionArea>
            <CardMedia
            src="../dist/img/healthcare.png"
            title="Healthcare"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </PopularContainer>
  )
}

export default PopularSearches;
