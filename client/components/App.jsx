
import React from 'react';
import Signup from './Signup.jsx';
import { AuthProvider } from "../src/contexts/AuthContext"
import Login from './Login.jsx';
import ReactCalendar from './ReactCalendar.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import CreateJob from './CreateJob.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import FooterIcons from './Footer.jsx';
import LandingPage from './LandingPage.jsx';
import Navbar from './Navbar.jsx';
<<<<<<< HEAD
import Notes from './Notes.jsx';
=======
import ScrollToTop from './ScrollToTop.jsx';
>>>>>>> main
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
    <div>
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <Navbar />
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
<<<<<<< HEAD
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/profile">
              <PostAJob />
=======
            <Route path="/addjob">
              <CreateJob />
>>>>>>> main
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
      <FooterIcons />
    </div>
  );
}

export default App;
