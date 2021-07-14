import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar.jsx';
import LandingSearchBar from './LandingSearchBar.jsx';
import PopularSearches from './PopularSearches.jsx';

const PageContainer = styled.div`
  background-color: #192a34;
  background-image: linear-gradient(45deg, #192a34 7%, #49475b 94%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LandingPage = (props) => {
  return (
    <PageContainer>
      <Navbar />
      <LandingSearchBar />
      <PopularSearches />
    </PageContainer>
  );
}

export default LandingPage;
