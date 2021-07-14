import React from 'react';
import styled from 'styled-components';

const MottoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;
  height: 75vh;
  color: white;
  font-size: 24px;
  background: rgba(0, 0, 0, .6);
  font-family: Roboto, Arial, Helvetica, sans-serif;
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