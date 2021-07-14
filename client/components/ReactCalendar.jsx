import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import PopUp from './PopUp.jsx';

const ReactCalendar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [data, addData] = useState({});

  // useEffect(() => {
  //   axios.get('/notification/getnotification')
  //   .then((response) => {
  //     //do something with response
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }, []);

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