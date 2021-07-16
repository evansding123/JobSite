import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import PopUp from './PopUp.jsx';
import ApptInfo from './ApptInfo.jsx';
import axios from 'axios';
import { differenceInCalendarDays } from 'date-fns';
import { compareAsc, format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import parseJSON from 'date-fns/parseJSON';
import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


import {useAuth, currentUser} from '../src/contexts/AuthContext.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarContainer = styled.div`
  width: 95vw;
`;

const ReactCalendar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [data, addData] = useState([]);


  const {login, currentUser} = useAuth();

  let resultArray = [];

  useEffect(() => {
    axios.get('/notification/getnotification', {
      params: {
        date: new Date(),
        email: currentUser.email, //change to auth email
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


  let box = clicked ? <PopUp date={value.toISOString()} callback = {handleClose}/> : <div></div>;

  let info =  <ApptInfo data = {data}/>


  return (
    <>
      <Container>
        <CalendarContainer>
          <Calendar
            onChange={handleClick}
            value={value}
            tileContent = {tileContent}
            nextLabel = {<Button><ArrowRightIcon fontSize={'large'} /></Button>}
            next2Label = {<Button><NavigateNextIcon fontSize={'small'} /></Button>}
            prevLabel = {<Button><ArrowLeftIcon fontSize={'large'} /></Button>}
            prev2Label = {<Button><NavigateBeforeIcon fontSize={'small'} /></Button>}
           >
          </Calendar>
        </CalendarContainer>
      </Container>
      <div>{box}</div>
      <div>{info}</div>
    </>
  );
}

export default ReactCalendar;