import React from 'react';
import Signup from './Signup.jsx';
import { AuthProvider } from "../src/contexts/AuthContext"
import Login from './Login.jsx';
import ReactCalendar from './ReactCalendar.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import PostAJob from './PostAJob.jsx';
import FooterIcons from './Footer.jsx';
import styled from 'styled-components';
import LandingPage from './LandingPage.jsx';
import Navbar from './Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
padding-top: 1vw;
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
  margin-right: -10%;
  padding-right: 5%;
`;

const App = (props) => {
  return(
    <>
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/findjobs">
              <HomePage />
            </Route>
            <Route path="/calendar">
              <ReactCalendar />
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
        <FooterIcons />
      </Footer>
    </Background>
  );
}

export default App;
