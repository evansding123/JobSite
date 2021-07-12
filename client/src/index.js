import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

import Calendar from 'tui-calendar'; /* ES6 */

var calendar = new Calendar('#calendar', {
  defaultView: 'month',
  taskView: true,
  template: {
    monthDayname: function(dayname) {
      return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
    }
  }
});