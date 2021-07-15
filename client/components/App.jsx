
import React from 'react';
import Signup from './Signup.jsx';
import { AuthProvider } from "../src/contexts/AuthContext"
import Login from './Login.jsx';
import ReactCalendar from './ReactCalendar.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import CreateJob from './CreateJob.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import LandingPage from './LandingPage.jsx';
import Navbar from './Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { theme } from '../src/constants';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.surface};
    padding: 0px;
    margin: 0px;
    height: 100%
  }
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
            <Route path="/addjob">
              <CreateJob />
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
  </>
  );
}

export default App;
