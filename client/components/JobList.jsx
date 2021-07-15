import React from 'react';
import styled from 'styled-components';
import JobPost from './JobPost.jsx';

const JobListContainer = styled.div`
  font-family: Helvetica;
  display: flex;
  color: white;
  text-decoration: none;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background-color: #274358;
  width: 100%;
  margin-top: 5vh;
  margin-left: 4vh;
  border-radius: 2px;
`

const Scroll = styled.div`
  max-height: 60vw;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const JobList = ({ listings, showDetail }) => {
  return (
    <Scroll>
      <JobListContainer>
        {listings.map((item, index) =>
          <JobPost item={item} key={index} showDetail={showDetail} />
        )}
      </JobListContainer>
    </Scroll>
  )
}

export default JobList;
