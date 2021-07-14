import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  background-color: #192A34;
  width: 100%;
  height: 6vh;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.2);
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

const Background = styled.div`
  background-color: #274358;
  margin-left: -10%;
  margin-left: -8%;
`;

const Footer = styled.div`
  margin-left: -10%;
  margin-left: -8%;
  background-color: #192A34;
  height: 40vh;
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

export default function Nav() {
  return (
    <NavContainer>
      <Job>Job</Job>
      <Site>Site</Site>
      <NavButtons>Find Jobs</NavButtons>
      <NavButtons>Employers</NavButtons>
      <NavButtons>Log In</NavButtons>
    </NavContainer>
  )
}