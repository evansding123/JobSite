const pool = require('../../db/index.js');

module.exports = {
  addNotification: async (values = []) => {
    const query = `INSERT INTO notifications (date, notification, accounts_id) VALUES ($1, $2, $3)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      throw error;
    }
  },
};