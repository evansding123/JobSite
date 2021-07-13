import React, { useContext, useState, useEffect } from 'react';
import app from '../firebase.js';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return app.auth().createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  useEffect(() =>{
    const unsubscribe = app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login
  };

  return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
