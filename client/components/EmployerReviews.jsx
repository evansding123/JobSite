import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';

const fakeReviews = [
  {
    id: 1,
    review: 'Jobsite makes it so easy to reach a large, targeted candidate pool in a short amount of time',
    name: 'Evans Ding, Software Engineer at Facebook',
    icon: <FacebookIcon/>,
  },
  {
    id: 2,
    review: 'We have found so many quality candidates on Jobsite than we have on competitor sites',
    name: 'John Yasis, Software Engineer at Google',
  },
  {
    id: 3,
    review: 'Jobsite means more than job postings for us. It is their technology and support that really make them a true partner',
    name: 'Brandon Parker, Software Engineer at Tesla',
  }
];

const ReviewContainer = styled.div`
  color: #FFFFFF;
  margin: 2% 10%;
`;

const useStyles = makeStyles(() => ({
  title: {
    color: '#FFFFFF',
    marginBottom:'8vh',
  },
}));

export default function EmployerReviews() {
  const classes = useStyles();

  return (
    <div id="employer-reviews">
      <Typography gutterBottom variant="h3" align="center" className={classes.title}>
        Employer Reviews
      </Typography>
        {fakeReviews.map(({ id, review, name, icon }) => (
          <ReviewContainer key={id}>
            <Typography gutterBottom variant="h4" align="center">
              {review}
            </Typography>
            <Typography gutterBottom variant="h6" align="center">
              - {name}
            </Typography>
          </ReviewContainer>
        ))}
    </div>
  );
}