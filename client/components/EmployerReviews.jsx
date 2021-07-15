import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';

const fakeReviews = [
  {
    id: 1,
    review: 'Jobsite makes it so easy to reach a large, targeted candidate pool in a short amount of time',
    name: 'Evans Ding, Accountant at Facebook',
    icon: <FacebookIcon/>,
  },
  {
    id: 2,
    review: 'We have found so many quality candidates on Jobsite than we have on competitor sites',
    name: 'John Yasis, Nurse at Kaiser Permanante',
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
  quote: {
    fontStyle: 'italic',
  }
}));


export default function EmployerReviews() {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <div id="employer-reviews">
      <Typography gutterBottom variant="h3" align="center" className={classes.title}>
        Employer Reviews
      </Typography>
        {fakeReviews.map(({ id, review, name, icon }) => (
          <ReviewContainer key={id}>
            <Typography gutterBottom variant="h4" align="center" className={classes.quote}>
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

