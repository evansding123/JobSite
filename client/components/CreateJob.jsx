import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../src/constants';
import Nav from './Nav.jsx';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vw;
  `;

const Header = styled.h1`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
    background-color: ${theme.colors.surfaceLight};
    width: 38vw;
    margin-top: 80px;
    max-height: 50vw;
    border-radius: 7px;
    padding: 80px;

  `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function CreateJob() {

  return (
    <div>
      <Nav />
      <Container>
        <InnerContainer>
          <Header>Post a Job</Header>
          <Form>
            <input placeholder="Title*" required></input>

            <input placeholder="Location*" required></input>

            <input placeholder="Compensation*" required></input>

            <input placeholder="Experience Level*" required></input>

            <textarea placeholder="Description*" required></textarea>

            <input type="submit" value="Submit" />
          </Form>
        </InnerContainer>
      </Container>
    </div>
  )
}

