import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import list from './exampleList.js';

const SearchContainer = styled.form`
font-family: Helvetica;
display: flex;
text-decoration: none;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #192A34;
width: 40%;
margin-top: 5vh;
margin-left: 30%;
margin-bottom: 10%;
border: 1px solid;
border-color: #49475B;
border-radius: 10px;
`

const StyledInput = styled(TextField)`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 80%;
background-color: white;
border-radius: 3px;
`;

const FormHeaders = styled.div`
color: #E9EB9E;
font-family: Helvetica;
`;

const CheckContainer = styled.div`
color: white;
font-family: Helvetica;
font-size: 1.5vh;
`;

const SearchAndButton = styled.div`
display: flex;
text-decoration: none;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const StyledButton = styled.button`
font-family: Helvetica;
font-weight: bold;
height: 49px;
width: 49px;
border: none;
background-color: #49475B;
color: white;
cursor: pointer;
border-radius: 5px;
transition: 0.3s;
&:hover ${StyledButton} {
  color: #E9EB9E;
  border: none;
}
`;




const Search = () => {
  const [searchTerm, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearch(event.target.value);
  }

  return (
    <SearchContainer>
      <FormHeaders>Search Jobs</FormHeaders>
      <br></br>
      <SearchAndButton>
        <StyledInput TextField id="filled-basic" label="Search" variant="filled"
          size="small"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        &nbsp;
        <StyledButton type="submit">Go</StyledButton>
      </SearchAndButton>
      <br></br>
      <FormHeaders>Type of Employment</FormHeaders>
      <br></br>
      <CheckContainer>
        <label for="full-time">
          <input type="checkbox" id="full-time" name="full-time" value="full-time" />
            Full-Time
        </label>
        <br></br>
        <label for="part-time">
          <input type="checkbox" id="part-time" name="part-time" value="part-time" />
            Part-Time
        </label>
        <br></br>
        <label for="temp">
          <input type="checkbox" id="temp" name="temp" value="temp" />
            Temporary
        </label>
        <br></br>
        <label for="intern">
          <input type="checkbox" id="intern" name="intern" value="intern" />
            Internship
        </label>
      </CheckContainer>
    <br></br>
      <FormHeaders>Experience Level</FormHeaders>
      <br></br>
      <CheckContainer>
        <label for="entry-level">
          <input type="checkbox" id="entry-level" name="entry-level" value="entry-level" />
          Entry-Level
        </label>
        <br></br>
        <label for="mid-level">
          <input type="checkbox" id="mid-level" name="mid-level" value="mid-level" />
          Mid-Level
        </label>
        <br></br>
        <label for="senior">
          <input type="checkbox" id="senior" name="senior" value="senior" />
          Senior-Level
        </label>
        <br></br>
        <label for="exec">
          <input type="checkbox" id="exec" name="exec" value="exec" />
          Executive-Level
        </label>
      </CheckContainer>
      <br></br>
      <FormHeaders>Salary</FormHeaders>
      <br></br>
      <input type="range" min="1" max="100" class="slider" id="salary" />
      <br></br>
      <FormHeaders>Remote/Onsite</FormHeaders>
      <br></br>
      <CheckContainer>
        <label for="remote">
          <input type="checkbox" id="remote" name="remote" value="remote" />
          Remote
        </label>
        <br></br>
        <label for="onsite">
          <input type="checkbox" id="onsite" name="onsite" value="onsite" />
          Onsite
        </label>
        <br></br>
        <label for="mixed">
          <input type="checkbox" id="mixed" name="mixed" value="mixed" />
          Mixed
        </label>
      </CheckContainer>
      <br></br>
      <FormHeaders>Date Posted</FormHeaders>
      <br></br>
      <CheckContainer>
        <label for="24h">
          <input type="checkbox" id="24h" name="24h" value="24h" />
          24 hours
        </label>
        <br></br>
        <label for="3d">
          <input type="checkbox" id="3d" name="3d" value="3d" />
          3 days
        </label>
        <br></br>
        <label for="7d">
          <input type="checkbox" id="7d" name="7d" value="7d" />
          7 days
        </label>
        <br></br>
        <label for="14d">
          <input type="checkbox" id="14d" name="14d" value="14d" />
          14 days
        </label>
        <br></br>
        <label for="30d">
          <input type="checkbox" id="30d" name="30d" value="30d" />
          30 days
        </label>
        <br></br>
        <label for="anytime">
          <input type="checkbox" id="anytime" name="anytime" value="anytime" />
          Anytime
        </label>
      </CheckContainer>
      <br></br>
      <FormHeaders>Location Range</FormHeaders>
      <br></br>
      <CheckContainer>
        <label for="5m">
        <input type="checkbox" id="5m" name="5m" value="5m" />
        5 miles
        </label>
        <br></br>
        <label for="20m">
        <input type="checkbox" id="20m" name="20m" value="20m" />
        20 miles
        </label>
        <br></br>
        <label for="50m">
        <input type="checkbox" id="50m" name="50m" value="50m" />
        50 miles
        </label>
        <br></br>
        <label for="100m">
        <input type="checkbox" id="100m" name="100m" value="100m" />
        100 miles
        </label>
        <br></br>
        <label for="anywhere">
        <input type="checkbox" id="anywhere" name="anywhere" value="anywhere" />
        Anywhere
        </label>
      </CheckContainer>
      <br></br>
    </SearchContainer>
  )
}

export default Search;