const express = require('express');
const path = require('path');
const app = express();
const PORT = 3011;
const axios = require('axios');
const router = express.Router();
const generateData = require('./sampleData/generateData.js');

app.use(express.json());


app.listen(PORT, () => {
  console.log(`listening on port ${PORT} for data generation`);
});

// app.get('/rawUserData/:users', (req, res) => {
//   const {users} = req.query;
//   // const {users} = req.params;
//   // res.send(users);
//   axios.get(`https://randomuser.me/api/?results=${users}`)
//   .then((response) => res.status(200).send(response.data))
//   .catch((err) => {
//     console.error(err);
//     res.status(404).send(err);
//   });
// })

app.use('/generate', router);

router.get('/accounts', (req, res) => {
  const {transform} = req.query;
  res.send(generateData.accounts(transform));
})

router.get('/notes', (req, res) => {
  const {transform} = req.query;
  res.send(generateData.notes(transform));
})

// router.get('/notifications', (req, res) => {
//   res.send(generateData.notifications)
// })

router.get('/employers', (req, res) => {
  const {transform} = req.query;
  res.send(generateData.employers(transform));
})

router.get('/job_seekers', (req, res) => {
  const {transform} = req.query;
  res.send(generateData.job_seekers(transform));
})

router.get('/jobs', (req, res) => {
  let {posts, transform} = req.query;
  posts = Number.parseInt(posts);
  res.send(generateData.jobs(posts, transform));
})

router.get('/job_seekers_applied_jobs', (req, res) => {
  let {applications, jobs, transform} = req.query;
  applications = Number.parseInt(applications);
  jobs = Number.parseInt(jobs);
  res.send(generateData.job_seekers_applied_jobs(applications, jobs, transform));
})
