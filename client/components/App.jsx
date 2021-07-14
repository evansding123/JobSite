import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactCalendar from './ReactCalendar.jsx';
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import PostAJob from './PostAJob.jsx';
import styled from 'styled-components';
import LandingPage from './LandingPage.jsx';
import Navbar from './Navbar.jsx';

const App = (props) => {
  return(
    <>
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
              {/* <HomePage /> */}
            <Route path="/profile">
              <PostAJob />
            </Route>
            <Route path="/login">
              <Profile />
            </Route>
          </Switch>
      </Router>
      {/* <Footer>
      </Footer> */}
    </>
  );
}

export default App;