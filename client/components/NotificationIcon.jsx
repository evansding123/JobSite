import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import {useAuth, currentUser} from '../src/contexts/AuthContext.js';
import { differenceInCalendarDays } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import parseJSON from 'date-fns/parseJSON';

import axios from 'axios';


const NotificationI = styled(NotificationsIcon)`
  color: white;
  transition: all .2s ease-in-out;
  padding-bottom: .5vh;

  &:hover ${NotificationI} {
    color: #E9EB9E;
    border: none;
    cursor: pointer;
    transform: scale(1.2);
  }
`
const IconLink = styled(Link)`
text-decoration: none;
`

const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 10,
    padding: 5,

  }
}));



function NotificationIcon () {
  const [ badgeVisibility, setBadgeVisibility ] = useState(false);
  const [data, addData] = useState([]);
  const [number, addNumber] = useState(0);
  //useEffect, send a get request to notificaions/getjobnotification
  //set state of whatever, conditionally render badge on whether or not the range is included

  const {login, currentUser} = useAuth();

  const classes = useStyles();

  useEffect (() => {
    axios.get('/notification/getjobnotification', {
      params: {
        email: currentUser.email, //change to auth email
      }
    })
    .then((response) => {
      console.log(response);
      const resultArray = [];
        for(var i = 0; i < response.data.rows.length; i++) {
          resultArray.push(response.data.rows[i]);
        }
      addData(resultArray);
      return resultArray;
    })
    .then((data) => {

      const test = data.map((item) => {
        let number = differenceInCalendarDays(parseISO(new Date().toISOString()), parseISO(item.date));
        return (number < 8 && number >=0);
      })

      addNumber(test.reduce((accumulator, value) => {
        if(value) {
          accumulator += 1;
        }
        return accumulator;
      }, 0))

    })
    .catch((error) => {
      console.log(error);
    })
  }, [])


  return (
    <>
    <IconLink to="/calendar">
    <Badge classes = {{ badge: classes.badge}} badgeContent = {number} color="secondary" invisible={badgeVisibility} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}>
      <NotificationI onClick={()=> {setBadgeVisibility(true)}}></NotificationI>
      </Badge></IconLink>
    </>
  )
}

export default NotificationIcon;
