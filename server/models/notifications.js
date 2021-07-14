const pool = require('../../db/index.js');

module.exports = {
  addNotification: async (values = [], username, id) => {
    console.log(values);
    const query = `INSERT INTO notifications (date, title, guests, location, notification) VALUES ($1, $2, $3, $4, $5);
    INSERT INTO accounts_notifications_appointments (notifications_id, accounts_id) VALUES (LAST_INSERT_ID, (SELECT id FROM accounts WHERE username = ${username}))`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getNotification: async (date, username) => {
    const query = `SELECT * FROM notifications WHERE date = ${date} AND accounts_notifications_appointments.accounts_id = ((SELECT username from accounts) = ${username}))`;
    try {
      const res = await pool.query(query, values);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};