const pool = require('../../db/index.js');

module.exports = {
  addJob: async (values = []) => {
    const query = `INSERT INTO jobs (industry, employment_type, title, salary, remote, experience, date, employers_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getOneJob: async (id) => {
    const query = `SELECT * FROM jobs WHERE id = $1`;
    try {
      const res = await pool.query(query, [id]);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getJobs: async (count = 5, page = 1) => {
    //filter by certain parameters
    const query = `SELECT * FROM jobs ORDER BY id LIMIT $1 OFFSET $2`;
    try {
      const res = await pool.query(query, [count, page]);
      return res;
    } catch (error) {
      throw error;
    }
  },
};