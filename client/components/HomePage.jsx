import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search.jsx';
import JobList from './JobList.jsx';
import Banner from './Banner.jsx';
import DetailCard from './DetailCard.jsx';
import LandingSearchBar from './LandingSearchBar.jsx';
import list from './exampleList.js';

const Nav = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: baseline;
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
`;

const Footer = styled.div`
  margin-left: -10%;
  margin-left: -8%;
  background-color: #192A34;
  height: 40vh;
`;

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
  align-items: flex-start;
  align-self: center;
  justify-content: center;
  background-color: #274358;
  height: 80%;
  width: 90%;
  padding-right: 20vw;
`

const NoResults = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #274358;
  margin-left: 10%;
  margin-left: 8%;
  padding-right: 6%;
  padding-top: 4%;
  font-size: 30px;
  color: white;
  font-family: Helvetica;
`;

const HomePageContainer = styled.div`
  overflow: hidden;
  margin-left: -10%;
`;

const HomePage = () => {
  const [listings, updateListings] = useState(list);
  const [listingsCopy, updateListingsCopy] = useState(list);
  const [postDetail, showPostDetail] = useState(false);
  const [currentPost, setCurrentPost] = useState(list[0]);

  useEffect(() => {
    axios.get('/jobListings')
    .then((response) => {
      console.log(response.data);
    });
  })

  const showDetail = (post) => {
    setCurrentPost(post);
    showPostDetail(!postDetail);
  }

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  const search = (searchTerm, filters) => {
    const jobList = listingsCopy.slice();
    const noMatches = null;
    const matches = [];
    const trueFilters = [];

    for (const item of filters) {
      if (item.checked === true) {
        trueFilters.push(item.option);
      }
    }

    if (trueFilters.length > 0) {
      const filteredJobList = [];
      for (const job of jobList) {
        for (const trueItem of trueFilters) {
          if (job[trueItem] === true) {
            filteredJobList.push(job);
          }
        }
      }

      for (var i = 0; i < filteredJobList.length; i++) {
        if (filteredJobList[i].position.toLowerCase().includes(searchTerm.toLowerCase()) || filteredJobList[i].company.toLowerCase().includes(searchTerm.toLowerCase()) || filteredJobList[i].location.toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(filteredJobList[i]);
        }
      }
      if (matches.length >= 1) {
        updateListings(matches);
      } else {
        updateListings(null);
      }
    } else {
      for (var i = 0; i < jobList.length; i++) {
        if (jobList[i].position.toLowerCase().includes(searchTerm.toLowerCase()) || jobList[i].company.toLowerCase().includes(searchTerm.toLowerCase()) || jobList[i].location.toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(jobList[i]);
        }
      }
      if (matches.length >= 1) {
        updateListings(matches);
      } else {
        updateListings(list);
      }
    }
  }

  return (
    <HomePageContainer>
        <Background>
          <Banner />
          <ContentContainer>
            <Search search={search} />
            <JobList listings={listings} showDetail={showDetail} />
            {!postDetail ? <DetailCard post={currentPost} /> : <DetailCard post={currentPost} />}
          </ContentContainer>
        </Background>
    </HomePageContainer>
  )
}

export default HomePage;