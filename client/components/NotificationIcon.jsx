import React, { useState } from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';

const NotificationI = styled(NotificationsIcon)`
  color: white;
  margin-right: 1vh;
  transition: all .2s ease-in-out;

  &:hover ${NotificationI} {
    color: #E9EB9E;
    border: none;
    cursor: pointer;
    transform: scale(1.2);
  }
`

function NotificationIcon () {
  return (
    <>
      <NotificationI />
    </>
  )
}

export default NotificationIcon;
