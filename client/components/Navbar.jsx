import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";
import { useAuth, logout } from '../src/contexts/AuthContext.js';

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #192A34;
  font-family: Roboto, Helvetica, sans-serif;
  height: 6vh;
  padding-right: 1px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  font-size: 14px;
  padding-right: 1vw;
  text-decoration: none;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  transition: all .2s ease-in-out;

  NavLink:visited {
    color: white;
  }
  &:hover ${NavLink} {
    color: #E9EB9E;
    border: none;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  console.log(currentUser);

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

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
        {currentUser
          ? (
            <>
              <NavLink to="/calendar">Calendar</NavLink>
              <NavLink onClick={handleLogout}>Log Out ({currentUser.email})</NavLink>
            </>
          )
          : <NavLink className="login" to='/login'>Log In</NavLink>
        }

      </NavLinkContainer>
    </Nav>
  )
}

export default Navbar;
