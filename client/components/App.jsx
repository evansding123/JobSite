import React from 'react';
import Signup from './Signup.jsx';
import { AuthProvider } from "../src/contexts/AuthContext"
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Login from './Login.jsx';


const App = (props) => {


  return(
    <>
     <div>Hello World</div>
      <div>
        <Router>
          <Navbar />
          <AuthProvider>
            <Switch>
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
