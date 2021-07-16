const models = require('../models/index.js');

module.exports = {
  postNotification: async (req, res) => {
    try {
      let array = [];
      let time = req.body.time.slice(11, req.body.time.length);
      console.log('controller time', time);
      for(var keys in req.body) {
        array.push(req.body[keys]);
      }
      array.shift();
      array.push(time);
      //console.log(array);
      const queryData = await models.notifications.addNotification(array, req.body.email);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getNotification: async (req, res) => {
    try {
      //console.log(req.query);
      const{date, email} = req.query;
      let month = date.slice(5, 7);


      const queryData = await models.notifications.getNotification(month, email);
      res.status(200).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getJobNotification: async (req, res) => {
    try {
      console.log(req.query);
      const{email} = req.query;

      const queryData = await models.notifications.getJobNotification(email);
      res.status(200).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  }

};