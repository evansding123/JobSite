import React from 'react';
import styled from 'styled-components';

const MottoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
`;

const MainPhoto = () => {
  return (
    <div id="showcase">
      <MottoContainer>
        Connecting people with jobs
        <br />
        and jobs with people
      </MottoContainer>
    </div>
  )
}

export default MainPhoto;