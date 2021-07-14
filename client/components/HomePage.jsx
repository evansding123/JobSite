import React, { useState } from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import JobList from './JobList.jsx';
import list from './exampleList.js';

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

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  const search = (searchTerm) => {
    const jobList = listingsCopy.slice();
    const noMatches = null;
    const matches = [];

    for (var i = 0; i < jobList.length; i++) {
      if (jobList[i].position.toLowerCase().includes(searchTerm.toLowerCase()) || jobList[i].company.toLowerCase().includes(searchTerm.toLowerCase()) || jobList[i].location.toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(jobList[i]);
      }
    }
  }

  return (
    <div>
      {listings === null
        ? <NoResults onClick={() => { updateListings(listingsCopy) }}>No Results - Return Home</NoResults>
        : (
          <ContentContainer>
            <Search search={search} />
            <JobList listings={listings} />
          </ContentContainer>
        )}
      {/* <Footer>
          © 2021 JobSite
        </Footer> */}
    </div>
  );
}

export default HomePage;