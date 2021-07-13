import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import PopUp from './PopUp.jsx';

const ReactCalendar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [value, onChange] = useState(new Date());

  // useEffect(() => {
  //   axios.get('/notification')
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



  // let box;


  // if(clicked === true) {
  //   box = <div className = 'event'>hello there</div>
  // } else {
  //   box = <div></div>;
  // }

  let box = clicked ? <PopUp date={value.toString()} callback = {handleClose}/> : <div></div>;

  return (
    <div>
      <Calendar onChange={handleClick} value={value}>
      </Calendar>
      <div>{box}</div>
    </div>
  );
}

export default ReactCalendar;