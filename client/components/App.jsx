import React from 'react';
import SignupModal from './SignupModal.jsx';
import { AuthProvider } from "../src/contexts/AuthContext"
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';


const App = (props) => {


  return(
    <>
     <div>Hello World</div>
      <div>
        <Router>
          <Navbar />
          <AuthProvider>
            <Switch>
              <Route exact path="/SignupModal">
                <SignupModal />
                </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
