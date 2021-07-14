import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #274358;
  margin-left: -10%;
  margin-left: -8%;
`;

const ContentContainer = styled.div`
  font-family: Helvetica;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  background-color: #274358;
  margin-top: 5%;
  height: 80%;
  width: 80%;
`

const Container = styled.div`
font-family: Helvetica;
display: flex;
text-decoration: none;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #192A34;
width: 40%;
margin-top: 5vh;
margin-left: 30%;
margin-bottom: 10%;
border: 1px solid;
border-color: #49475B;
border-radius: 10px;
`
const StyledH2 = styled.h2`
color: white;
`

const Profile = () => {
  return (
    <Background>
      <ContentContainer>
        <Container>
          <StyledH2>MyProfile</StyledH2>
        </Container>
      </ContentContainer>
    </Background>
  )
}

export default Profile;
