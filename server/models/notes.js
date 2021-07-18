const pool = require('../../db/index.js');

module.exports = {
  addNote: async (values = []) => {
    const query = `INSERT INTO notes (note, accounts_id, date) VALUES ($1, $2, $3)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getNotes: async () => {
    const query = `SELECT * FROM notes LIMIT 10`;;
    try {
      const res = await pool.query(query);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getOneNote: async ({ id, account_id }) => {
    const query = `SELECT * FROM notes WHERE id = $1 AND accounts_id = $2`;
    try {
      const res = await pool.query(query, [id, account_id]);
      return res;
    } catch (error) {
      throw error;
    }
  },
  updateNote: async (value = []) => {
    const query = `UPDATE notes SET note = $1, date = $2 WHERE id = $3 AND accounts_id = $4`;;
    try {
      const res = await pool.query(query, value);
      return res;
    } catch (error) {
      throw error;
    }
  },
  deleteNote: async (value = []) => {
    const query = `DELETE FROM notes WHERE id = $1 AND accounts_id = $2`;;
    try {
      const res = await pool.query(query, value);
      return res;
    } catch (error) {
      throw error;
    }
  },
};