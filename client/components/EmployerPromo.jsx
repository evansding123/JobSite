import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  root: {
    width: '50vw',
    height: '35vh',
    margin: '3em 10em'
  },
  media: {
    height: '100%',
    width: '100%',
  },
}));

export default function EmployerPromo() {
  const classes = useStyles();

  return (
    <div id="employer-reviews">
      <Card raised className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/img/notes-tool.jpg"
        />
      </Card>
    </div>
  );
}
