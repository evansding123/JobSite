import React, { useState } from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: #49475B;
  background-color: #192A34;
  border-radius: 10px;
  margin-top: 5vh;
  height: 20%;
  width: 40%;
  padding-right: 2vw;
  padding-top: 2vw;
  margin-right: 10vw;
  margin-left: 1vw;
  margin-bottom: 6vh;
  line-height: 1.3;
  &:hover ${DetailContainer} {
    border-color: #E9EB9E;
    pointer: cursor;
  }
`;

const Position = styled.h4`
`;

const Description = styled.div`
  font-size: 12px;
  padding-bottom: 3vh;
`;

const Text = styled.div`
  padding-left: 10%;
  color: white;
`;

const CompanyAndLocation = styled.div`
  font-size: 15px;
  color: white;
`;

const Apply = styled.span`
  color: #E9EB9E;
  padding-bottom: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Applied = styled.span`
  color: white;
  padding-bottom: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Scroll = styled.div`
  max-height: 15vw;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-left: 2vw;
`;

const DetailCard = ({ post }) => {
  return (
    <DetailContainer >
        <Text>
        <Position>{post.position}</Position>
        <CompanyAndLocation>
        {post.company}
        <br></br>
        {post.location}
        <br></br>
        </CompanyAndLocation>
        <br></br>
        <Description>
          {post.description}
          <br></br>
          <Scroll>
            <ul>
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
              <li>{post.description}</li>
            </ul>
          </Scroll>
        </Description>
        </Text>
    </DetailContainer>
  )
}

export default DetailCard;