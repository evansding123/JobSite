import React, { useState } from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

const NotificationI = styled(NotificationsIcon)`
  color: white;
  transition: all .2s ease-in-out;

  &:hover ${NotificationI} {
    color: #E9EB9E;
    border: none;
    cursor: pointer;
    transform: scale(1.2);
  }
`

function NotificationIcon () {
  const [ badgeVisibility, setBadgeVisibility ] = useState(false);
  //
  return (
    <>
    <Badge variant="dot" color="secondary" invisible={badgeVisibility} overlap="circular">
      <NotificationI onClick={()=> {setBadgeVisibility(true)}}/>
      </Badge>
    </>
  )
}

export default NotificationIcon;
