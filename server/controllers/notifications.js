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
      const queryData = await models.notifications.addNotification(array, req.body.username);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getNotification: async(req, res) => {
    try {
      const queryData = await models.notifications.getNotification(req.params.date);
      res.status(200).send(queryData);
    } catch(error) {
      res.status(404).send(error);
    }
  }

};