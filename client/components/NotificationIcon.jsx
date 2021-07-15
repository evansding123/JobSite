import React, { useState } from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';

const NotificationI = styled(NotificationsIcon)`
  color: white;
  margin-right: 1vh;
  &:hover ${NotificationI} {
    color: #E9EB9E;
    border: none;
    cursor: pointer;
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
