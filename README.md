# JobSite
1. Run `npm install` to get all dependencies

2. Access postgres
  a. for ubuntu users, use the following command: `sudo -i -u postgres`
  b.

3. create a config.js file (or .env file) with the following layout:

  module.exports = {
    poolKey: {
      $ PGUSER=dbuser \
      PGHOST=database.server.com \
      PGPASSWORD=secretpassword \
      PGDATABASE=mydb \
      PGPORT=3211 \
      node script.js
    }
  }

4. To find the host name and port run the following command in psql:

  SELECT *
  FROM pg_settings
  WHERE name = 'port';

tip: the default port is 5432.

5. To genarate data for the db:
  a. send a get request to this address, and insert the number of users you want to have:
  (data will be pulled from this object and used in the account table)
  `https://randomuser.me/api/?results=INSERT_NUMBER_HERE`

  b. create a `json.js` file inside of generateData, paste the json into the json file. Then, modify the json.js file to be exported like so: `module.exports = {JSON_FILE_HERE}`

  c. use this command in the terminal: `npm run generateData`

  d. use this list of queries to generate data:
  `http://localhost:3011/generate` +
    (for `accounts` table)
    `/accounts`

    (for `notes` table)
    `/notes`

    (for `employers` table)
    `/employers`

    (for `job_seekers` table)
    `/job_seekers`

    (for `jobs` table)
    `/jobs?posts=INSERT_NUMBER_OF_DESIRED_POSTS`
    example: `http://localhost:3011/generate/job_seekers_applied_jobs?applications=20000&jobs=5000&transform=true`

    (for `/job_seekers_applied_jobs` table. The number of jobs must accurately represent the number of job posts you generated above)
    `/job_seekers_applied_jobs?applications=INSERT_NUMBER_OF_DESIRED_APPLICANTS&jobs=INSERT_NUMBER_OF_JOB_POSTS_USED_IN_JOBS`

    all queries can take in an optional query parameter called transform: `?transform=true` || `&transform=true`
    Transform accepts a truthy value. If you include transform the generated data will be manipulated in the program and returned in csv format.

    /*ISSUES WITH CSV FORMAT:*/
    If you include the optional transform query parameter and the csv file does not work in the database:
    1. exclude the transform parameter.
    2. query as defined above.
    3. copy the returned generated json data.
    4. use this website to generate csv from the returned json: `https://www.convertcsv.com/json-to-csv.htm`

6. After you have your csv data create csv files in the db folder. Name the files after the appropriate tables for the data in the db.

<<<<<<< HEAD
7. Specify the path to the csv files in schema.sql

8. Run the following command to create the db from the schema: `psql -U postgres < INSERT_FILE_PATH.sql`
   You can also change to any user you want `-U INSERT_USER`
=======
7. Run the following command to create the db from the schema: `psql -U postgres < INSERT_FILE_PATH.sql`
   You can also change to any user you want `-U INSERT_USER`

8. `npm run watch`

9. `npm start`
>>>>>>> createJobFeature
