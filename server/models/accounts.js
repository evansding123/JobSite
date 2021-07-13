const pool = require('../../db/index.js');

module.exports = {
  addAccount: async (values = []) => {
    const query = `INSERT INTO accounts (email, username, password, longitude, latitude, location_address) VALUES ($1, $2, $3, $4, $5, $6)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};