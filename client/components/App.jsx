import React from 'react';
import ReactCalendar from './ReactCalendar.jsx';
import styled, { createGlobalStyle } from 'styled-components';
import HomePage from './HomePage.jsx';
import CreateJob from './CreateJob.jsx';
import { theme } from '../src/constants';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.surface};
    padding: 0px;
    margin: 0px;
    height: 100%
  }
`;

const App = (props) => {
  return (
    <div>
        <GlobalStyle />
        {/* <ReactCalendar /> */}
        {/* <div> */}
        {/* <HomePage /> */}
        <CreateJob />
        {/* </div> */}
    </div>
  )
}

export default App;