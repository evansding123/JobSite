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
  getNotes: async (email) => {
    const query = `SELECT note FROM accounts INNER JOIN notes ON accounts_id = accounts.id WHERE accounts.email = $1`;
    try {
      const res = await pool.query(query, email);
      return res;
    } catch (error) {
      throw error;
    }
  }
};