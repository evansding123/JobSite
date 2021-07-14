import React from 'react';
import styled from 'styled-components';
// import Navbar from './Navbar.jsx';
import MainPhoto from './MainPhoto.jsx';
import LandingSearchBar from './LandingSearchBar.jsx';
import PopularSearches from './PopularSearches.jsx';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingPage = (props) => {
  return (
    <PageContainer>
      <MainPhoto />
      {/* <Navbar /> */}
      <LandingSearchBar />
      <PopularSearches />
    </PageContainer>
  );
}

export default LandingPage;
