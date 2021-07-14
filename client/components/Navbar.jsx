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

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Job = styled.div`
  font-family: Helvetica;
  color: #E9EB9E;
  font-size: 5vh;
  padding-left: 1vw;
`;

const Site = styled.div`
  font-family: Helvetica;
  color: #799469;
  font-size: 5vh;
  padding-right: 55%;
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <LogoLink href="/">
          <Job>Job</Job>
          <Site>Site</Site>
        </LogoLink>
      </LogoContainer>
      <NavLink to="/">Find Jobs</NavLink>
      <NavLink to="/profile">Post Jobs</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Nav>
  )
}

export default Navbar;
