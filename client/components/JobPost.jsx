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
  width: 90%;
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
  &:hover ${Apply} {
    color: #49475B;
    pointer: cursor;
  }
`

const Applied = styled.span`
  color: E9EB9E;
  padding-bottom: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover ${Applied} {
    color: #white;
    pointer: cursor;
  }
`

const JobPost = ({ item, showDetail }) => {
  const [apply, instapply] = useState(false);
  return (
    <PostContainer onClick={() => {
      showDetail(item);
    }}>
        <Text>
          <Position>
            {item.position}
          </Position>
          <CompanyAndLocation>
            {item.company}
            <br></br>
            {item.location}
            <br></br>
          </CompanyAndLocation>
          <Description>
            {item.description}
          </Description>
        </Text>
        {
          !apply ? <Apply onClick={() => {instapply(!apply)}}>Instapply</Apply > :
          <Applied onClick={() => {instapply(!apply)}}>Applied</Applied>
        }
    </PostContainer>
  )
}

export default JobPost;