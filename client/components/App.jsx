import React from 'react';
import ReactCalendar from './ReactCalendar.jsx';
import HomePage from './HomePage.jsx';
// import Calendar from './Calendar.jsx';
import Profile from './Profile.jsx';
import PostAJob from './PostAJob.jsx';
import styled from 'styled-components';
import LandingPage from './LandingPage.jsx';
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
  `;
  // padding-left: 10%;
  // margin-left: -10%;
  // margin-right: -8%;
  // margin-top: -9px;

const NavLink = styled(Link)`
  font-family: Helvetica;
  font-size: 24px;
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

// const Footer = styled.div`
//   margin-left: -10%;
//   margin-left: -8%;
//   background-color: #192A34;
//   height: 40vh;
// `;

const ContentContainer = styled.div`
  font-family: Helvetica;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: left;
  justify-content: left;
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
  width: 40%;
  margin-top: 5vh;
  margin-left: 30%;
  margin-bottom: 10%;
  border: 1px solid;
  border-color: #49475B;
  border-radius: 10px;
`

// const Background = styled.div`
//   background-color: #274358;
//   `;
  // margin-left: -10%;
  // margin-left: -8%;

const App = (props) => {
  return(
    <>
      <Router>
        <Nav>
          <Job>Job</Job>
          <Site>Site</Site>
          <NavLink to="/">Find Jobs</NavLink>
          <NavLink to="/profile">Post Jobs</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </Nav>
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