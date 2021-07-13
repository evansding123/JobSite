# JobSite
1. Run `npm install` to get all dependencies
2. Access postgres
  a. for ubuntu users, use the following command: `sudo -i -u postgres`
  b.
3. Run the following command to create the db from the schema: `psql -U postgres < INSERT_FILE_PATH.sql`
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