import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../src/constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.surface};
  height: 65vw;
`;

const Header = styled.h1`
  margin: 20px;
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
  padding: 80px;
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

const initialForm = {
  title: '',
  location: '',
  compensation: '',
  experience: '',
  description: '',
};

export default function CreateJob() {
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    let updatedForm = {...form};
    updatedForm[e.target.name] = e.target.value;
    setForm(updatedForm);
  }

  function handleSubmit(e) {
    alert(form); // test for now
    setForm(initialForm);
    e.preventDefault();
  }

  return (
    <div>
      <Container>
        <InnerContainer>
          <Header>Post a Job</Header>
          <Form onSubmit={handleSubmit}>
            <Input onChange={handleChange} value={form.title} name="title" type="text" placeholder="Title *" required></Input>
            <Input onChange={handleChange} value={form.location} name="location" type="text" placeholder="Location *" required></Input>
            <Input onChange={handleChange} value={form.compensation} name="compensation" type="number" placeholder="Compensation *" required></Input>
            <Select onChange={handleChange} value={form.experience} name="experience" placeholder="Experience Level *" required>
              <option value="EntryLevel" default>Entry Level</option>
              <option value="MidLevel">Mid Level</option>
              <option value="SeniorLevel">Senior Level</option>
              <option value="ExecutiveLevel">Executive Level</option>
            </Select>
            <TextArea onChange={handleChange} value={form.description} name="description" maxLength="1000" placeholder="Description *" required></TextArea>
            <Submit type="submit"><strong>SUBMIT</strong></Submit>
          </Form>
        </InnerContainer>
      </Container>
    </div>
  )
}

