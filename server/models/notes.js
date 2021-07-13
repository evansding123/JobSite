const pool = require('../../db/index.js');

module.exports = {
  addNote: async (values = []) => {
    const query = `INSERT INTO notes (note, accounts_id) VALUES ($1, $2)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      throw error;
    }
  },
};