import React, { useState } from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { Link, useHistory } from "react-router-dom";

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

function NotificationIcon () {
  const [ badgeVisibility, setBadgeVisibility ] = useState(false);
  //
  return (
    <>
    <IconLink to="/calendar">
    <Badge variant="dot" color="secondary" invisible={badgeVisibility} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}>
      <NotificationI onClick={()=> {setBadgeVisibility(true)}}/>
      </Badge></IconLink>
    </>
  )
}

export default NotificationIcon;
