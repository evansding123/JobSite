import React from 'react';
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
  return (

    <AccountCircle />
  )
}

export default AccountIcon;
