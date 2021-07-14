import React, { useState } from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import JobList from './JobList.jsx';
import list from './exampleList.js';

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  background-color: #192A34;
  height: 6vh;
  padding-right: 1px;
  padding-top: 1.5vh;
  padding-left: 10%;
  margin-left: -10%;
  margin-right: -8%;
  margin-top: -9px;
`;

const Job = styled.div`
  font-family: Helvetica;
  color: #E9EB9E;
  font-size: 5vh;
  padding-left: 10vw;
`;

const Site = styled.div`
  font-family: Helvetica;
  color: #799469;
  font-size: 5vh;
  padding-right: 55%;
`;

const Background = styled.div`
  background-color: #274358;
  margin-left: -10%;
  margin-left: -8%;
`;

// const Footer = styled.div`
//   margin-left: -10%;
//   margin-left: -8%;
//   background-color: #192A34;
//   height: 40vh;
// `;

const NavButtons = styled.div`
  font-family: Helvetica;
  color: white;
  font-size: 2vh;
  padding-right: 2vw;
  padding-top: 2.5vh;
  white-space: nowrap;
  &:hover ${NavButtons} {
    color: #E9EB9E;
    pointer: cursor;
}
`

const ContentContainer = styled.div`
  font-family: Helvetica;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #274358;
  margin-top: 5%;
  height: 80%;
  width: 80%;
`

const NoResults = styled.div`
  background-color: #274358;
  margin-left: 10%;
  margin-left: 8%;
  font-size: 5vh;
  color: white;
  font-family: Helvetica;
`;

const HomePage = () => {
  const [listings, updateListings] = useState(list);
  const [listingsCopy, updateListingsCopy] = useState(list);

  const search = (searchTerm) => {
    const jobList = listingsCopy.slice();
    const noMatches = null;
    const matches = [];

    for (var i = 0; i < jobList.length; i++) {
      if (jobList[i].position.toLowerCase().includes(searchTerm.toLowerCase()) || jobList[i].company.toLowerCase().includes(searchTerm.toLowerCase()) || jobList[i].location.toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(jobList[i]);
      }
    }
    if (matches.length >= 1) {
      updateListings(matches);
    } else {
      updateListings(null)
    }
  }

  return (
    <div>
      {listings === null ? <NoResults onClick={() => {updateListings(listingsCopy)}}>No Results - Return Home</NoResults> : <Background>
        <ContentContainer>
          <Search search={search}/>
          <JobList listings={listings} />
        </ContentContainer>
      </Background>}

    </div>
  )
}

export default HomePage;