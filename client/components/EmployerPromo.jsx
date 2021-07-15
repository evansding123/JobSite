import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

const PromoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const useStyles = makeStyles(() => ({
  root: {
    width: '46vw',
    height: '55vh',
  },
  media: {
    height: '100%',
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
  },
  body: {
    color: '#FFFFFF',
  },
  paper: {
    backgroundColor: '#363056',
    margin: ' 2% 4%',
    padding: '4%',
  }
}));

export default function EmployerPromo() {
  const classes = useStyles();

  return (
    <div id="employer-promo">
        <Typography gutterBottom variant="h3" className={classes.text} >
          How it Works
        </Typography>
      <PromoContainer>
        <TextContainer>
          <Paper elevation={5} className={classes.paper}>
            <Typography gutterBottom variant="h6" className={classes.text} >
              STEP 1: Create Your Job Post
            </Typography>
          <Typography gutterBottom variant="body1"className={classes.body}>
            Once you post your job, it gets sent to matching candidates, then invites them to apply.
          </Typography>
          </Paper >
          <Paper elevation={5} className={classes.paper}>
            <Typography gutterBottom variant="h6" className={classes.text} >
              STEP 2: Schedule Interviews
            </Typography>
            <Typography gutterBottom variant="body1"className={classes.body} >
              Use JobSite's calendar tool to schedule phone and video interviews.
            </Typography>
          </Paper>
          <Paper elevation={5} className={classes.paper}>
            <Typography gutterBottom variant="h6" className={classes.text} >
              STEP 3: Review Your Great Matches
            </Typography>
            <Typography gutterBottom variant="body1"className={classes.body} >
              As candidates apply, use JobSite's notes tool to organize thoughts and keep track of feedback.
            </Typography>
          </Paper>
        </TextContainer>
        <Card raised className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/img/notes-tool.jpg"
          />
        </Card>
      </PromoContainer>
      </div>
  );
}
