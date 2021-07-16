import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Slider from './Slider.jsx';
import list from './exampleList.js';

const SearchContainer = styled.form`
  font-family: Helvetica;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #192A34;
  width: 43%;
  margin-top: 5vh;
  padding-bottom: 3vh;
  margin-left: 40%;
  margin-bottom: 10%;
  border: 1px solid;
  border-color: #49475B;
  border-radius: 10px;
  line-height: 1.5;
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
  padding-top: 9%;
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

const filter = [
  {id: 1, option: 'fullTime', checked: false},
  {id: 2, option: 'partTime', checked: false},
  {id: 3, option: 'Temporary', checked: false},
  {id: 4, option: 'Internship', checked: false},
  {id: 5, option: 'Entry-Level', checked: false},
  {id: 6, option: 'Mid-Level', checked: false},
  {id: 7, option: 'Senior-Level', checked: false},
  {id: 8, option: 'Internship', checked: false},
  {id: 10, option: 'Remote', checked: false},
  {id: 11, option: 'Onsite', checked: false},
  {id: 12, option: 'Checked', checked: false},
]

const Search = ({ search }) => {
  const [searchTerm, setSearch] = useState('');
  const [filterList, setFilterList] = useState(filter);
  const [selected, setSelected] = useState([]);

  const handleChange = event => {
    event.preventDefault()
    setSearch(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSearch(event.target.value);
    search(searchTerm, filterList);
    setSearch('');
  }

  const handleCheckBoxChange = (event) => {
    const selectedId = event.target.id;
    const filterCopy = filterList.slice();
    for (let item of filterCopy) {
      if (item.id.toString() === selectedId) {
        item.checked = !item.checked;
      }
    }
    setFilterList(filterCopy);
  }

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <FormHeaders>Search Jobs</FormHeaders>
      <br></br>
      <SearchAndButton>
        <StyledInput id="filled-basic" label="Search" variant="filled"
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
        <label htmlFor="full-time">
          <input type="checkbox" id="1" name="full-time" value="full-time" onChange={handleCheckBoxChange} />
          Full-Time
        </label>
        <br></br>
        <label htmlFor="part-time">
          <input type="checkbox" id="2" name="part-time" value="part-time" onChange={handleCheckBoxChange} />
          Part-Time
        </label>
        <br></br>
        <label htmlFor="temp">
          <input type="checkbox" id="3" name="temp" value="temp" onChange={handleCheckBoxChange} />
          Temporary
        </label>
        <br></br>
        <label htmlFor="intern">
          <input type="checkbox" id="4" name="intern" value="intern" onChange={handleCheckBoxChange} />
          Internship
        </label>
      </CheckContainer>
    <br></br>
      <FormHeaders>Experience Level</FormHeaders>
      <br></br>
      <CheckContainer>
        <label htmlFor="entry-level">
          <input type="checkbox" id="5" name="entry-level" value="entry-level" onChange={handleCheckBoxChange} />
          Entry-Level
        </label>
        <br></br>
        <label htmlFor="mid-level">
          <input type="checkbox" id="6" name="mid-level" value="mid-level" onChange={handleCheckBoxChange} />
          Mid-Level
        </label>
        <br></br>
        <label htmlFor="senior">
          <input type="checkbox" id="7" name="senior" value="senior" onChange={handleCheckBoxChange} />
          Senior-Level
        </label>
        <br></br>
        <label htmlFor="exec">
          <input type="checkbox" id="8" name="exec" value="exec" onChange={handleCheckBoxChange} />
          Executive-Level
        </label>
      </CheckContainer>
      <br></br>
      <FormHeaders>Salary Range</FormHeaders>
      <br></br>
      <Slider />
      <br></br>
      <FormHeaders>Remote/Onsite</FormHeaders>
      <br></br>
      <CheckContainer>
        <label htmlFor="remote">
          <input type="checkbox" id="10" name="remote" value="remote" onChange={handleCheckBoxChange} />
          Remote
        </label>
        <br></br>
        <label htmlFor="onsite">
          <input type="checkbox" id="11" name="onsite" value="onsite" onChange={handleCheckBoxChange} />
          Onsite
        </label>
        <br></br>
        <label htmlFor="mixed">
          <input type="checkbox" id="12" name="mixed" value="mixed" onChange={handleCheckBoxChange} />
          Mixed
        </label>
      </CheckContainer>
      <br></br>
      <FormHeaders>Date Posted</FormHeaders>
      <br></br>
      <CheckContainer>
        <label htmlFor="24h">
          <input type="checkbox" id="24h" name="24h" value="24h" />
          24 hours
        </label>
        <br></br>
        <label htmlFor="3d">
          <input type="checkbox" id="3d" name="3d" value="3d" />
          3 days
        </label>
        <br></br>
        <label htmlFor="7d">
          <input type="checkbox" id="7d" name="7d" value="7d" />
          7 days
        </label>
        <br></br>
        <label htmlFor="14d">
          <input type="checkbox" id="14d" name="14d" value="14d" />
          14 days
        </label>
        <br></br>
        <label htmlFor="30d">
          <input type="checkbox" id="30d" name="30d" value="30d" />
          30 days
        </label>
        <br></br>
        <label htmlFor="anytime">
          <input type="checkbox" id="anytime" name="anytime" value="anytime" />
          Anytime
        </label>
      </CheckContainer>
      <br></br>
      <FormHeaders>Location Range</FormHeaders>
      <br></br>
      <CheckContainer>
        <label htmlFor="5m">
          <input type="checkbox" id="5m" name="5m" value="5m" />
          5 miles
        </label>
        <br></br>
        <label htmlFor="20m">
          <input type="checkbox" id="20m" name="20m" value="20m" />
          20 miles
        </label>
        <br></br>
        <label htmlFor="50m">
          <input type="checkbox" id="50m" name="50m" value="50m" />
          50 miles
        </label>
        <br></br>
        <label htmlFor="100m">
          <input type="checkbox" id="100m" name="100m" value="100m" />
          100 miles
        </label>
        <br></br>
        <label htmlFor="anywhere">
          <input type="checkbox" id="anywhere" name="anywhere" value="anywhere" />
          Anywhere
        </label>
      </CheckContainer>
      <br></br>
    </SearchContainer>
  )
}

export default Search;