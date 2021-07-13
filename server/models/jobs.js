const pool = require('../../db/index.js');

module.exports = {
  // --POST
  addJob: async (values = []) => {
    const query = `INSERT INTO jobs (id, industry, employment_type, title, salary, remote, experience, date, employers_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};