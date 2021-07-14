import React from 'react';
import styled from 'styled-components';
// import Navbar from './Navbar.jsx';
import LandingSearchBar from './LandingSearchBar.jsx';
import PopularSearches from './PopularSearches.jsx';

const LandingPage = (props) => {
  return (
    <>
      {/* <Navbar /> */}
      <LandingSearchBar />
      <PopularSearches />
    </>
  );
}

export default LandingPage;
