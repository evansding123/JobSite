import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import PopUp from './PopUp.jsx';
import axios from 'axios';

const ReactCalendar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [data, addData] = useState({});

  useEffect(() => {
    axios.get('/notification/getnotification', {
      params: {
        date: '2021-07-02',
        email: 'xavier.duran@example.com',
      }
    })
    .then((response) => {
      //do something with response
      console.log(response);
      addData(response);

    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  const handleClick = (event) => {
    onChange(event);
    setClicked(true);
  }

  const handleClose = (closed) => {
    setClicked(false);
  }



  let box = clicked ? <PopUp date={value.toISOString()} callback = {handleClose}/> : <div></div>;

  return (
    <div>
      <Calendar onChange={handleClick} value={value}>
      </Calendar>
      <div>{box}</div>
    </div>
  );
}

export default ReactCalendar;