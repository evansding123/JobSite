import React from 'react';
import styled from 'styled-components';
import MainPhoto from './MainPhoto.jsx';
import LandingSearchBar from './LandingSearchBar.jsx';
import PopularSearches from './PopularSearches.jsx';
import Promotion from './Promotion.jsx';

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
      <LandingSearchBar />
      <PopularSearches />
      <Promotion />
    </PageContainer>
  );
}

export default LandingPage;
