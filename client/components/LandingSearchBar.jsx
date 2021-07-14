import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function LandingSearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Job Title or Keyword"
        inputProps={{ 'aria-label': 'search jobs' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Location"
        inputProps={{ 'aria-label': 'location' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        {/* <SearchIcon /> */}
      </IconButton>
    </Paper>
  );
}
