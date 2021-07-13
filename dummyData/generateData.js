/*
*
*  For Dummy Data:
*  Send a request to this api, and specify the number of users you want.
*  Copy the data into a `json.js` file within the dummyData folder.
*  https://randomuser.me/api/?results=INSERT_NUMBER_HERE
*
*/

const data = require('./json.js');

const accounts = data.results.map((user) => {
  return {
    username: user.login.username,
    password: user.login.password,
    email: user.email.account,
    longitude: user.location.coordinates.longitude,
    latitude: user.location.coordinates.latitude
  };
});

const notes = new Array(1000).fill('This is a default note to fill the database');


const splitWhole = (data.results.length % 2) === 0 ? data.results.length / 2 : (data.results.length - 1) / 2;
console.log(splitWhole);

const employers = [];
for (let x = 1; x < splitWhole + 1; x++) {
 employers.push(x);
}
console.log(employers);

const job_seekers = [];
for (let x = splitWhole; x < data.results.length + 1; x++) {
  job_seekers.push(x);
}
console.log(job_seekers);

const industries = [
  'Agriculture',
  'Construction',
  'Consulting',
  'Education',
  'Healthcare',
  'Hospitality',
  'Law',
  'Manufacturing',
  'Transportation',
  'Tech',
  'Utilities',
  'Other'
];

const remote = [
  'Remote',
  'Onsite',
  'Mixed'
]

const employment_type = [
  'Full Time',
  'Part Time',
  'Temporary',
  'internship'
]

const experience = [
  'Entry',
  'Mid-level',
  'Senior',
  'Executive'
]

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul'
];


// const title = `Alcatra filet mignon tongue frankfurter bacon, porchetta beef 
// ribs kielbasa kevin corned beef shankle brisket picanha short loin pastrami. 
// Chicken meatball sausage burgdoggen hamburger jerky pork chop capicola shank 
// picanha t-bone pastrami tail. Hamburger frankfurter fatback chislic sausage 
// alcatra burgdoggen short loin filet mignon rump picanha sirloin tail prosciutto. 
// Bresaola pig leberkas pancetta sirloin, shankle pork loin rump t-bone chuck 
// burgdoggen strip steak landjaeger.`;

const title = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem \
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo \
inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo \
enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia \
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro \
quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, \
sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam \
quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam \
corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem \
vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, \
vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const jobsObjArray = new Array(5000).fill(0);
const jobs = jobsObjArray.map(() => {
  const industriesRandom = industries[Math.floor(Math.random() * industries.length)];
  const remoteRandom = remote[Math.floor(Math.random() * remote.length)];
  const employment_typeRandom = employment_type[Math.floor(Math.random() * employment_type.length)];
  const experienceRandom = experience[Math.floor(Math.random() * experience.length)];
  let titleRandom = new Array(1 + Math.floor(Math.random() * 10)).fill(0).map(() => (Math.floor(Math.random() * title.split(' ').length)));
  titleRandom = titleRandom.map((random) => title.split(' ')[random]).join(' ');
  const salary = 100 * Math.floor(Math.random() * 400);
  const date = `${month[Math.floor(Math.random() * month.length)]} ${(1 + Math.floor(Math.random() * 28))} ${2021}`;
  const employers_id = (1 + Math.floor(Math.random(500)));

  let obj = {};
  obj.industry = industriesRandom;
  obj.employment_type = employment_typeRandom;
  obj.title = titleRandom;
  obj.salary = salary;
  obj.remote = remoteRandom;
  obj.experience = experienceRandom;
  obj.date = date;
  obj.employers_id = employers_id;
  return obj;
});

let jobsJoinObjArray = new Array(20000).fill(0);
const job_seekers_jobs = jobsJoinObjArray.map(() => {
  const job_seekers_id = job_seekers[Math.floor(1 + (Math.random() * job_seekers.length))];
  const jobs_id = Math.floor(1 + (Math.random() * jobs.length));
  let obj = {};
  obj.job_seekers_id = job_seekers_id;
  obj.jobs_id = jobs_id;
  return obj;
})

// console.log((new Date).toString().split(' ').slice(1, 4).join(' '));