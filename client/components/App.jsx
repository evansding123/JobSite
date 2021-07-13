import React from 'react';

import ReactCalendar from './ReactCalendar.jsx';
import HomePage from './HomePage.jsx';

const App = (props) => {
  return(
    <>
    <ReactCalendar />
    <div>
      <HomePage />
    </div>
    </>
  );
}

export default App;