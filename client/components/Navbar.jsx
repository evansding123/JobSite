import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar () {

  return (
    <div className="Nav">
      <Link className="SignupModal" to='/SignupModal'> <h2>Sign up</h2> </Link>
    </div>

  )
}
