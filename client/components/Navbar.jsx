import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../src/contexts/AuthContext.js';
import AccountIcon from './AccountIcon.jsx';
import NotificationIcon from './NotificationIcon.jsx';

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #192A34;
  font-family: Roboto, Helvetica, sans-serif;
  height: 6vh;
  padding: 5px 20px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  transition: all .3s ease-in-out;
  margin-left: 8px;
  margin-right: 8px;
  height: 100%;
  border-bottom: transparent solid 2px;

  NavLink:visited {
    color: white;
  }
  &:hover ${NavLink} {
    color: #E9EB9E;
    border-bottom: #E9EB9E solid 2px;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-size: 14px;
  line-height: 6vh;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: end;
  width: 50vw;
  padding-left: 20px;
`;

const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Job = styled.div`
  color: #E9EB9E;
  font-size: 2.8rem;
  align-self: flex-end;
  font-weight: 700;
`;

const Site = styled.div`
  color: #799469;
  font-size: 2.6rem;
  align-self: flex-end;
`;




const Navbar = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  return (
    <Nav>
      <LogoLink href="/">
        <LogoContainer>
          <Job>Job</Job>
          <Site>Site</Site>
        </LogoContainer>
      </LogoLink>
      <NavLinkContainer>
        <NavLink to="/findjobs">Find Jobs</NavLink>
        <NavLink to="/addjob">Post Jobs</NavLink>
        <NavLink to="/employers">Employers</NavLink>
        {currentUser
          ? <>  <NotificationIcon /> <AccountIcon /> </>
          : <NavLink className="login" to='/login'>Log In</NavLink>
        }
      </NavLinkContainer>
    </Nav>
  )
}

export default Navbar;
