import React from 'react';
import ReactCalendar from './ReactCalendar.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import PostAJob from './PostAJob.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CreateJob from './CreateJob.jsx';
import { theme } from '../src/constants';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.surface};
    padding: 0px;
    margin: 0px;
    height: 100%
  }
`;

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

const NavLink = styled(Link)`
font-family: Helvetica;
font-size: 2.5vh;
padding-right: 2vw;
text-decoration: none;
color: white;
NavLink:visited {
  color: white;
}
&:hover ${NavLink} {
  color: #E9EB9E;
  border: none;
}
`

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

const Footer = styled.div`
  margin-left: -10%;
  margin-left: -8%;
  background-color: #192A34;
  height: 40vh;
`;

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

const Container = styled.div`
font-family: Helvetica;
display: flex;
text-decoration: none;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #192A34;
width: 40%;
margin-top: 5vh;
margin-left: 30%;
margin-bottom: 10%;
border: 1px solid;
border-color: #49475B;
border-radius: 10px;
`

const Background = styled.div`
  background-color: #274358;
  margin-left: -10%;
  margin-left: -8%;
`;

const App = (props) => {
  return(
    <>
      <Router>
        <AuthProvider>
          <Nav>
            <Job>Job</Job>
            <Site>Site</Site>
            <NavLink to="/">Find Jobs</NavLink>
            <NavLink to="/profile">Post Jobs</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </Nav>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/profile">
              <PostAJob />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
            <Signup />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    <Footer>
    </Footer>
  </>
  );
}

export default App;
