const pool = require('../../db/index.js');

module.exports = {
  addAccount: async (values = []) => {
    const query = `INSERT INTO accounts (first_name, last_name, email, longitude, latitude, location_address) VALUES ($1, $2, $3, $4, $5, $6)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getAccountId: async ({ email }) => {
    const query = `SELECT id FROM accounts WHERE email = $1`;
    try {
      const res = await pool.query(query, [email]);
      return res;
    } catch (error) {
      throw error;
    }
  },
};