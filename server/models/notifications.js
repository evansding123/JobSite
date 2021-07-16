const pool = require('../../db/index.js');

module.exports = {
  addNotification: async (values = [], email) => {

    try {
      const query1 = `INSERT INTO notifications (date, title, guests, location, notification, start_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`

      const res1 = await pool.query(query1, values);


      const query2 = `INSERT INTO accounts_notifications_appointments (notifications_id, accounts_id) VALUES (${res1.rows[0].id}, (SELECT id FROM accounts WHERE email = '${email}'))`

      await pool.query(query2);
      return res1;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getNotification: async (month, email) => {
    //console.log(month,email);
    const query =
      `SELECT
      date, title, guests, start_time, end_time, location, notification
      FROM notifications
      INNER JOIN accounts_notifications_appointments
      ON accounts_notifications_appointments.notifications_id = notifications.id
      WHERE accounts_notifications_appointments.accounts_id = (SELECT id FROM accounts WHERE email ='${email}')
      AND EXTRACT (MONTH FROM notifications.date) = ${month}
      ORDER BY notifications.date;`

    try {
      const res = await pool.query(query);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },


  getJobNotification : async (email) => {

    const query =
      `SELECT
      date, title, guests, start_time, end_time, location, notification
      FROM notifications WHERE guests = '${email}';`

      try {
        const res = await pool.query(query);
        return res;
      } catch (error) {
        console.log(error);
        throw error;
      }

  }
};




    // const query = `INSERT INTO notifications (date, title, guests, location, notification) VALUES ($1, $2, $3, $4, $5)`;




    // INSERT INTO notifications (date, title, guests, location, notification) VALUES ('2021-07-02T07:00','somethig', 'evans', 'something', 'soes') RETURNING id;
    // INSERT INTO accounts_notifications_appointments (notifications_id, accounts_id) VALUES (3, (SELECT id FROM accounts WHERE username = 'purpleswan857'));


    //query for jobseeker side
    // const query = `SELECT * FROM notifications RIGHT JOIN ON accounts_notifications_appoinments.notifications_id = notifications.id AND accounts_notifications_appointments.guest = ${email}`
    //joinng on accounts table with accounts id