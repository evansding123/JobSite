const models = require('../models/index.js');

module.exports = {
  postNotification: async (req, res) => {
    try {
      let array = [];

      for(var keys in req.body) {
        array.push(req.body[keys]);
      }
      array.shift();
      //console.log(array);
      const queryData = await models.notifications.addNotification(array, req.body.email);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getNotification: async(req, res) => {
    try {
      console.log(req.query);
      const{date, email} = req.query;
      const queryData = await models.notifications.getNotification(date, email);
      res.status(200).send(queryData);
    } catch(error) {
      res.status(404).send(error);
    }
  }

};