import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
      <div className="Nav">
        <Link className="signup" to='/signup'> <h2>Sign up</h2> </Link>
        <Link className="login" to='/login'> <h2>Log in</h2> </Link>
      </div>
    </>
  );
}
