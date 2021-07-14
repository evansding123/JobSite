import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  background-color: transparent;
  height: 6vh;
  padding-right: 1px;
  padding-top: 1.5vh;
  padding-left: 10%;
  margin-left: -10%;
  margin-right: -8%;
  margin-top: -9px;
`;

const Job = styled.div`
  font-family: Helvetica;
  color: #E9EB9E;
  font-size: 5vh;
  padding-left: 10vw;
`;

const Site = styled.div`
  font-family: Helvetica;
  color: #799469;
  font-size: 5vh;
  padding-right: 55%;
`;

const NavButtons = styled.div`
  font-family: Helvetica;
  color: white;
  font-size: 2vh;
  padding-right: 2vw;
  padding-top: 2.5vh;
  white-space: nowrap;
  &:hover ${NavButtons} {
    color: #E9EB9E;
    pointer: cursor;
}
`

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Job>Job</Job>
        <Site>Site</Site>
        <NavButtons>Find Jobs</NavButtons>
        <NavButtons>Employers</NavButtons>
        <NavButtons>Log In</NavButtons>
      </Nav>
    </div>
  )
}

export default Navbar;
