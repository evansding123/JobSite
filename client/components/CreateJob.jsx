import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { theme } from '../src/constants';
import { useAuth } from '../src/contexts/AuthContext.js';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.surface};
  height: 65vw;
`;

const Header = styled.h1`
  margin: 10px;
  display: flex;
  justify-content: center;
  color: ${theme.colors.accent};
  font-family: sans-serif;
`;

const InnerContainer = styled.div`
  background-color: ${theme.colors.surfaceLight};
  min-width: 400px;
  width: 20vw;
  margin-top: 80px;
  border-radius: 7px;
  padding: 20px 50px 70px 50px;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.2);
  justify-content: center;
  max-height: 560px;
`;

const Input = styled.input`
  margin: 10px 0;
  height: 54px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    box-sizing: border-box;
  }
`;

const Select = styled.select`
  margin: 20px 0;
  height: 30px;
  width: 100%;
`;

const Submit = styled.button`
  margin: 10px 0;
  height: 30px;
  width: 150px;
  background-color: ${theme.colors.Independence};
  color: white;
  font-weight: normal;
  border-radius: 2px;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  height: 120px;
  width: 100%;
`;

const today = new Date().toString();

/*
[industry, employment_type, title, salary, remote, experience, date, employers_id]
*/





export default function CreateJob() {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState(currentUser ? currentUser.email : '');
  const initialForm = {
    industry: '',
    employment_type: '',
    title: '',
    salary: '',
    remote: '',
    experience: '',
    date: `${today}`,
    employers_id: email
  };
  const [form, setForm] = useState(initialForm);
  const industryFields = [];
  const remoteFields = ['Remote', 'Onsite', 'Mixed'];
  const remote = remoteFields.map((field) => <option key={field} value={field}>{field}</option>)
  console.log('currentUser:', currentUser.email);

  function handleChange(e) {
    let updatedForm = { ...form };
    updatedForm[e.target.name] = e.target.value;
    setForm(updatedForm);
  }

  function handleSubmit(e) {
    setEmail(currentUser.email);
    setForm(initialForm);
    console.log([form.industry, form.title, form.salary, form.remote, form.experience, form.date, form.employers_id]);
    alert('Job posted!'); // test for now
    axios.post('/jobs/addjob', [form.industry, form.title, form.title, form.salary, form.remote, form.experience, form.date, form.employers_id])
      .then(function (response) {
        console.log(response);
      });
    e.preventDefault();
  }

  return (
    <div>
      <Container>
        <InnerContainer>
          <Header>Post a Job</Header>
          <Form onSubmit={handleSubmit}>
            <Select onChange={handleChange} value={form.industry} name="industry" required>
              <option value="" defaultValue>Select Industry *</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Construction" >Construction</option>
              <option value="Consulting" >Consulting</option>
              <option value="Education" >Education</option>
              <option value="Healthcare" >Healthcare</option>
              <option value="Hospitality" >Hospitality</option>
              <option value="Law" >Law</option>
              <option value="Manufacturing" >Manufacturing</option>
              <option value="Transportation" >Transportation</option>
              <option value="Tech" >Tech</option>
              <option value="Utilities" >Utilities</option>
              <option value="Other" >Other</option>
            </Select>
            <Select onChange={handleChange} value={form.employment_type} name="employment_type" required>
              <option value="" defaultValue>Select Employment Type *</option>
              <option value="Full Time" >Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Temporary">Temporary</option>
              <option value="Internship">Internship</option>
            </Select>
            <Select onChange={handleChange} value={form.remote} name="remote" required>
              <option value="" defaultValue>Select Telework Options *</option>
              {remote}
            </Select>
            <Input onChange={handleChange} value={form.title} name="title" type="text" placeholder="Title *" required></Input>
            <Input onChange={handleChange} value={form.salary} name="salary" type="number" placeholder="Salary *" required></Input>
            <Select onChange={handleChange} value={form.experience} name="experience" required>
              <option value="" defaultValue>Select Experience Level *</option>
              <option value="Entry" defaultValue>Entry Level</option>
              <option value="Mid-level">Mid Level</option>
              <option value="Senior">Senior Level</option>
              <option value="Executive">Executive Level</option>
            </Select>
            {/* <TextArea onChange={handleChange} value={form.description} name="description" maxLength="1000" placeholder="Description *" required></TextArea> */}
            <Submit type="submit"><strong>SUBMIT</strong></Submit>
          </Form>
        </InnerContainer>
      </Container>
    </div>
  )
}

