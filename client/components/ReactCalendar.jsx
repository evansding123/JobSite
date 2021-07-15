import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import PopUp from './PopUp.jsx';
<<<<<<< HEAD
import axios from 'axios';
=======
import ApptInfo from './ApptInfo.jsx';
import axios from 'axios';
import { differenceInCalendarDays } from 'date-fns';
import { compareAsc, format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import parseJSON from 'date-fns/parseJSON';
import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

// import {useAuth, logout} from '../src/contexts/AuthContext.js';

>>>>>>> main

const ReactCalendar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [value, onChange] = useState(new Date());
<<<<<<< HEAD
  const [data, addData] = useState({});
=======
  const [data, addData] = useState([]);


  // const {login} = useAuth();





  let resultArray = [];
>>>>>>> main

  useEffect(() => {
    axios.get('/notification/getnotification', {
      params: {
<<<<<<< HEAD
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
=======
        date: new Date(),
        email: 'laertes.ferreira@example.com', //change to auth email
      }
    })
      .then((response) => {
        //do something with response
        console.log(response);
        let resultArray = [];
        for(var i = 0; i < response.data.rows.length; i++) {
          resultArray.push(response.data.rows[i]);
        }
        addData(resultArray);

      })
      .catch((error) => {
        console.log(error)
      })
  }, []);


>>>>>>> main

  const handleClick = (event) => {

    onChange(event);
    //if event has the same date as the props passed up from appdata, then change state?
    //probaby have to push the props into an array
    //set state of particuar date on click if the array contains the date of event


    setClicked(true);
  }

  const handleClose = (closed) => {
    setClicked(false);
  }

  const isSameDay = (a,b) => {

    return differenceInCalendarDays(a,b) === 0;
  }

  const tileContent = ({ date, view }) => {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if(data.length !== 0) {
        let appointment = (data.find(dDate => isSameDay(parseISO(dDate.date), parseISO(date.toISOString()))));
        if(appointment !== undefined) {
          return <AccessAlarmIcon></AccessAlarmIcon>
        }
      }
    }
  }

<<<<<<< HEAD
  let box = clicked ? <PopUp date={value.toISOString()} callback = {handleClose}/> : <div></div>;
=======

  let box = clicked ? <PopUp date={value.toISOString()} callback = {handleClose}/> : <div></div>;

  let info =  <ApptInfo data = {data}/>

>>>>>>> main

  return (
    <div>
      <Calendar onChange={handleClick} value={value} tileContent = {tileContent}>
      </Calendar>
      <div>{box}</div>
      <div>{info}</div>
    </div>
  );
}

export default ReactCalendar;