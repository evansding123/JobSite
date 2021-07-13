import React, { useState } from 'react';
import Calendar from 'react-calendar';
import PopUp from './PopUp.jsx';

const ReactCalendar = (props) => {


  const [clicked, popUp] = useState(false);
  const [value, onChange] = useState(new Date());


  const addDate = (event) => {
    onChange(event);
    popUp(true);
  }

  // let box;


  // if(clicked === true) {
  //   box = <div className = 'event'>hello there</div>
  // } else {
  //   box = <div></div>;
  // }

  let box = clicked === true ? <PopUp date = {value.toString()}/> : <div></div>;



  return (
    <div>
      <Calendar onChange ={addDate}  value={value}>
      </Calendar>
      <div>{box}</div>
    </div>
  );
}

export default ReactCalendar;