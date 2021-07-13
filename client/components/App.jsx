import React from 'react';
import Signup from './Signup.jsx';
import { AuthProvider } from "../src/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Calendar from './Calendar.jsx';
import HomePage from './HomePage.jsx';
import PrivateRouter from './PrivateRouter.jsx';

const App = (props) => {
  return(
    <>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRouter exact path="/" component={HomePage}>
                <HomePage />
              </PrivateRouter>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
