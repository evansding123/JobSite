import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import { useAuth, logout } from '../src/contexts/AuthContext.js';

const AccountCircle = styled(AccountCircleIcon)`
  color: white;
  margin-right: 3vh;
  margin-left: 1vh;
  transition: all .2s ease-in-out;

  &:hover ${AccountCircle} {
    color: #E9EB9E;
    border: none;
    cursor: pointer;
    transform: scale(1.2);
  }
`
const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
`

function AccountIcon () {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');
    console.log('logout fired')
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
    <MenuItem onClick={handleClose}> <MenuLink to="/calendar">Calendar</MenuLink></MenuItem>
    <MenuItem onClick={handleClose}> <MenuLink to="/notes">Notes</MenuLink></MenuItem>
    <MenuItem onClick={handleLogout}> Logout</MenuItem>

  </Menu>
  </>
  )
}

export default AccountIcon;
