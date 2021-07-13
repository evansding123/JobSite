import React from 'react';
import SignupModal from'./SignupModal.jsx';
import { AuthProvider } from "../src/contexts/AuthContext"



const App = (props) => {


  return(
    <>
      <AuthProvider>
        <div>Hello World</div>
        <SignupModal />
      </AuthProvider>
    </>
  );
}

export default App;