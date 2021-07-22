# JobSite

# Index
<ol>
    <li><a href="#Summary">Summary</a></li>
    <li><a href="#Prerequisites">Prerequisites</a></li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Module-Description">Module Description</a></li>
    <li><a href="#Authors">Author</a></li>
    <li><a href="#Acknowledgements">Acknowledgements</a></li>
</ol>

## Summary
JobSite is an employment web application, which allows job seekers to find good fitting jobs and employers to match with the right candidates. What distinguishes JobSite from other competitors is a calendar and notes tool that allows users to keep track of upcoming interviews and record any information about jobs. 

## Prerequisites
```sh
Node v14.16.0
npm 7.16.0
PostgreSQL 13
```
## Usage
1. Run `npm install` to get all dependencies

2. Access postgres
```sh
npm run db
```
- For ubuntu users, use the following command: `sudo -i -u postgres`

3. Create a config.js file in the root directory with the following layout:
```sh
module.exports = {
  host: 'localhost',
  user: 'root',
  database: 'job_site',
  password: '',
  port: '5432',
}
```

4. To find the host name and port run the following command in psql:
```sh
  SELECT *
  FROM pg_settings
  WHERE name = 'port';
```
tip: the default port is 5432.

5. To genarate data for the db:
  - Send a get request to this address, and insert the number of users you want to have:
  (data will be pulled from this object and used in the account table)
  `https://randomuser.me/api/?results=INSERT_NUMBER_HERE`

  - Create a `json.js` file inside of generateData, paste the json into the json file. Then, modify the json.js file to be exported like so:     `module.exports = {JSON_FILE_HERE}`

  - Use this command in the terminal: `npm run generateData`

  - Use this list of queries to generate data:
  http://localhost:3011/generate +
    (for accounts table)
    /accounts

    (for notes table)
    /notes

    (for employers table)
    /employers

    (for job_seekers table)
    /job_seekers

    (for jobs table)
    /jobs?posts=INSERT_NUMBER_OF_DESIRED_POSTS
    example: http://localhost:3011/generate/job_seekers_applied_jobs?applications=20000&jobs=5000&transform=true

    (for /job_seekers_applied_jobs table. The number of jobs must accurately represent the number of job posts you generated above)
    /job_seekers_applied_jobs?applications=INSERT_NUMBER_OF_DESIRED_APPLICANTS&jobs=INSERT_NUMBER_OF_JOB_POSTS_USED_IN_JOBS

    all queries can take in an optional query parameter called transform: `?transform=true` || `&transform=true`
    Transform accepts a truthy value. If you include transform the generated data will be manipulated in the program and returned in csv format.

    /*ISSUES WITH CSV FORMAT:*/
    If you include the optional transform query parameter and the csv file does not work in the database:
    1. exclude the transform parameter.
    2. query as defined above.
    3. copy the returned generated json data.
    4. use this website to generate csv from the returned json: https://www.convertcsv.com/json-to-csv.htm

6. After you have your csv data create csv files in the db folder. Name the files after the appropriate tables for the data in the db.

7. Run the following command to create the db from the schema:
```sh
npm run seed:schema
```

8. Build with webpack:
```sh
npm run build
```

9. Start Server:
```sh
npm start
```

## Module Description
#### Login/Signup
![Login/Signup](https://media.giphy.com/media/NTP6jIAiYkwAUM7PR6/giphy.gif)
![Login Page](https://media.giphy.com/media/W3KcgvjON8EyRM1uop/giphy.gif)
#### Landing Page
#### Employer Landing Page
#### Calendar
#### Notes

## Authors
- Brandon Parker
- Claire Chen
- Elizabeth Phung
- Evans Ding
- John Yasis
- Philip Latoza
- Sean Claybaugh
