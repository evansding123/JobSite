import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import JobList from './JobList.jsx';

const Nav = styled.div`
display: flex;
text-decoration: none;
flex-direction: row;
align-items: left;
justify-content: left;
background-color: #192A34;
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

const ContentContainer = styled.div`
font-family: Helvetica;
display: flex;
text-decoration: none;
flex-direction: row;
align-items: left;
justify-content: left;
background-color: #274358;
margin-top: 5%;
height: 80%;
width: 80%;
`

const HomePage = () => {
  return (
    <div>
      <Background>
        <Nav>
          <Job>Job</Job>
          <Site>Site</Site>
          <NavButtons>Find Jobs</NavButtons>
          <NavButtons>Employers</NavButtons>
          <NavButtons>Log In</NavButtons>
        </Nav>
        <ContentContainer>
          <Search />
          <JobList />
        </ContentContainer>
      </Background>
      <Footer>
      © 2021 Indeed
      </Footer>
    </div>
  )
}

export default HomePage;