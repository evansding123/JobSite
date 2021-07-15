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

const App = (props) => {
  return(
    <div>
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
      <FooterIcons />
    </div>
  );
}

export default App;
