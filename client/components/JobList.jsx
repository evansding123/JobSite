import React, { useState } from 'react';
import styled from 'styled-components';
import JobPost from './JobPost.jsx';
import list from './exampleList.js';

const JobListContainer = styled.div`
  font-family: Helvetica;
  display: flex;
  color: white;
  text-decoration: none;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background-color: #274358;
  width: 90%;
  margin-top: 5vh;
  margin-left: 5vh;
  border-radius: 2px;
`

const JobList = () => {
  const [listings, updateListings] = useState(list);
  return (
    <JobListContainer>
      {listings.map((item, index) =>
        <JobPost item={item} key={index} />
      )}
    </JobListContainer>
  )
}

export default JobList;
