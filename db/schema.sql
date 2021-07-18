DROP DATABASE IF EXISTS "job_site";
CREATE DATABASE "job_site";
\c "job_site";

DROP TABLE IF EXISTS
  "accounts, notes, notifications, job_seekers, employers, jobs, job_seekers_applied_jobs";

  CREATE TYPE industry AS ENUM (
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
);

CREATE TYPE remote AS ENUM (
  'Remote',
  'Onsite',
  'Mixed'
);

CREATE TYPE employment_type AS ENUM (
  'Full Time',
  'Part Time',
  'Temporary',
  'Internship'
);

CREATE TYPE experience AS ENUM (
  'Entry',
  'Mid-level',
  'Senior',
  'Executive'
);

CREATE TABLE "accounts" (
  "id" serial PRIMARY KEY,
  "first_name" varchar(255) NOT NULL,
  "last_name" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL UNIQUE,
  "longitude" varchar(255),
  "latitude" varchar(255),
  "location_address" varchar(255)
);

CREATE TABLE "notes" (
  "id" serial PRIMARY KEY,
  "note" text NOT NULL,
  "date" varchar(255) NOT NULL,
  "accounts_id" integer NOT NULL --foregin key
);

CREATE TABLE "notifications" (
  "id" serial PRIMARY KEY,
  "date"  date NOT NULL DEFAULT CURRENT_DATE,
  "title" varchar(255),
  "guests" varchar(255),
  "start_time" varchar(255),
  "end_time" varchar(255),
  "location" varchar(255) NOT NULL,
  "notification" text NOT NULL
);

CREATE TABLE "accounts_notifications_appointments" (
  "id" serial PRIMARY KEY,
  --maybe we need to add a guest email here?
  "accounts_id" integer NOT NULL, --foreign key
  "notifications_id" integer NOT NULL --foreign key
);

CREATE TABLE "employers" (
  "id" serial PRIMARY KEY,
  "accounts_id" integer NOT NULL --foregin key
);

CREATE TABLE "job_seekers" (
  "id" serial PRIMARY KEY,
  "resume" text,
  "cover_letter" text,
  "accounts_id" integer NOT NULL --foregin key
);

CREATE TABLE "jobs" (
  "id" serial PRIMARY KEY,
  "industry" industry NOT NULL, --constraints
  "employment_type" employment_type NOT NULL, --constraints
  "title" varchar(255) NOT NULL,
  "salary" integer NOT NULL,
  "remote" remote NOT NULL,
  "experience" experience, --constraints
  "date" varchar(255) NOT NULL DEFAULT CURRENT_DATE,
  "employers_id" integer NOT NULL --foreign key
);

CREATE TABLE "job_seekers_applied_jobs" (
  "id" serial PRIMARY KEY,
  "job_seekers_id" integer NOT NULL, --foreign key
  "jobs_id" integer NOT NULL --foreign key
);

ALTER TABLE "notes" ADD FOREIGN KEY ("accounts_id") REFERENCES "accounts" ("id");
ALTER TABLE "accounts_notifications_appointments" ADD FOREIGN KEY ("accounts_id") REFERENCES "accounts" ("id");
ALTER TABLE "accounts_notifications_appointments" ADD FOREIGN KEY ("notifications_id") REFERENCES "notifications" ("id");
ALTER TABLE "employers" ADD FOREIGN KEY ("accounts_id") REFERENCES "accounts" ("id");
ALTER TABLE "job_seekers" ADD FOREIGN KEY ("accounts_id") REFERENCES "accounts" ("id");
ALTER TABLE "jobs" ADD FOREIGN KEY ("employers_id") REFERENCES "employers" ("id");
ALTER TABLE "job_seekers_applied_jobs" ADD FOREIGN KEY ("job_seekers_id") REFERENCES "job_seekers" ("id");
ALTER TABLE "job_seekers_applied_jobs" ADD FOREIGN KEY ("jobs_id") REFERENCES "jobs" ("id");

CREATE INDEX ON "notes" ("accounts_id");
CREATE INDEX ON "accounts_notifications_appointments" ("accounts_id");
CREATE INDEX ON "accounts_notifications_appointments" ("notifications_id");
CREATE INDEX ON "employers" ("accounts_id");
CREATE INDEX ON "job_seekers" ("accounts_id");
CREATE INDEX ON "jobs" ("employers_id");
CREATE INDEX ON "job_seekers_applied_jobs" ("job_seekers_id");
CREATE INDEX ON "job_seekers_applied_jobs" ("jobs_id");

COPY "accounts" (username,password,email,longitude,latitude,location_address)
FROM '/Users/evansding/Desktop/BlueOcean/JobSite/accounts.csv' --insert your direct path to your .csv files
DELIMITER ','
CSV HEADER;

COPY "notes" (note, accounts_id)
FROM '/home/parker/hackreactor/JobSite/db/notes.csv'
DELIMITER ','
CSV HEADER;

COPY "employers" (accounts_id)
FROM '/home/parker/hackreactor/JobSite/db/employers.csv'
DELIMITER ','
CSV HEADER;

COPY "job_seekers" (accounts_id)
FROM '/home/parker/hackreactor/JobSite/db/job_seekers.csv'
DELIMITER ','
CSV HEADER;

COPY "jobs" (industry,employment_type,title,salary,remote,experience,date,employers_id)
FROM '/home/parker/hackreactor/JobSite/db/jobs.csv'
DELIMITER ','
CSV HEADER;

COPY "job_seekers_applied_jobs" (job_seekers_id,jobs_id)
FROM '/home/parker/hackreactor/JobSite/db/job_seekers_applied_jobs.csv'
DELIMITER ','
CSV HEADER;





-- ALTER TABLE "jobs" ADD CONSTRAINT check_types CHECK (
--   "industry" = "Agriculture" OR
--   "industry" = "Construction" OR
--   "industry" = "Consulting" OR
--   "industry" = "Education" OR
--   "industry" = "Healthcare" OR
--   "industry" = "Hospitality" OR
--   "industry" = "Law" OR
--   "industry" = "Manufacturing" OR
--   "industry" = "Transportation" OR
--   "industry" = "Tech" OR
--   "industry" = "Utilities" OR
--   "industry" = "Other"
-- );

-- ALTER TABLE "jobs" ADD CONSTRAINT check_types CHECK (
--   "employment_type" = "Full Time" OR
--   "employment_type" = "Part Time" OR
--   "employment_type" = "Temporary"
-- );

-- ALTER TABLE "jobs" ADD CONSTRAINT check_types CHECK (
--   "experience" = "Entry" OR
--   "experience" = "Mid-level" OR
--   "experience" = "Senior"
-- );