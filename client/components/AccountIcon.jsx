import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';


const AccountCircle = styled(AccountCircleIcon)`
  color: white;
  margin-right: 1vh;
`



function AccountIcon () {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log('clicked')
  };

  return (
    <>
    <AccountCircle aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />

  <Menu
    id="simple-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={handleClose}>My account</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>
  </>
  )
}

export default AccountIcon;
