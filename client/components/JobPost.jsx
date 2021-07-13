import React, { useState } from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  border: 1px solid;
  border-color: #49475B;
  background-color: #192A34;
  border-radius: 10px;
  height: 35%;
  width: 70%;
  margin-bottom: 3vh;
  line-height: 1.3;
  &:hover ${PostContainer} {
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
  padding-left: 2vw;
  padding-right: 2vw;
`;

const CompanyAndLocation = styled.div`
  font-size: 15px;
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

const JobPost = ({ item }) => {
  const [post, expandPost] = useState(false);
  return (
    <PostContainer onClick={() => {
      expandPost(!post);
    }}>
        <Text>
        <Position>{item.position}</Position>
        <CompanyAndLocation>
        {item.company}
        <br></br>
        {item.location}
        <br></br>
        </CompanyAndLocation>
        <Description>{item.description}</Description>
        </Text>
        {!post ? <Apply>Instapply</Apply> : <Applied>Applied</Applied>}
    </PostContainer>
  )
}

export default JobPost;