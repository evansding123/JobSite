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
    width: '21vw',
    height: '30vw',
    marginRight: '1vw',
    marginLeft: '1vw',
  },
  media: {
    height: '25vw',
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
