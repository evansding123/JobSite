import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #192A34;
  height: 6vh;
  padding-right: 1px;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  font-family: Helvetica;
  font-size: 14px;
  padding-right: 1vw;
  text-decoration: none;
  color: white;
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
  font-family: Helvetica;
  color: #E9EB9E;
  font-size: 2.8rem;
  align-self: flex-end;
  font-weight: bold;
`;

const Site = styled.div`
  font-family: Helvetica;
  color: #799469;
  font-size: 2.6rem;
  align-self: flex-end;
`;

const Navbar = () => {
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
        <NavLink to="/profile">Post Jobs</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </NavLinkContainer>
    </Nav>
  )
}

export default Navbar;
