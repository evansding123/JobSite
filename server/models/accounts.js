const pool = require('../../db/index.js');

module.exports = {
  addAccount: async (values = []) => {
    const query = `INSERT INTO accounts (email, username, password, location_coordinates, location_address) VALUES ($1, $2, $3, $4, $5)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      throw error;
    }
  },
};