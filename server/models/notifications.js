const pool = require('../../db/index.js');

module.exports = {
  addNotification: async (values = []) => {
    const query = `INSERT INTO notifications (date, title, start_time, location, notification) VALUES ($1, $2, $3, $4, $5)`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      throw error;
    }
  },
};