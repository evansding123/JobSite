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
  getNotes: async ({ account_id }) => {
    const query = `SELECT * FROM notes WHERE accounts_id = $1`;;
    try {
      const res = await pool.query(query, [account_id]);
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
  deleteNote: async ({ id, accounts_id }) => {
    const query = `DELETE FROM notes WHERE id = $1 AND accounts_id = $2`;
    try {
      const res = await pool.query(query, [id, accounts_id]);
      return res;
    } catch (error) {
      throw error;
    }
  },
};