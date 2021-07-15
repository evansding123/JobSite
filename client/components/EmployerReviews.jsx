import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  root: {

  },
}));

export default function EmployerPromo() {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardMedia
          className="notes-tool"
          image="/img/notes-tool.jpg"
        />
      </Card>
    </div>
  );
}
