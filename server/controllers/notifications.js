const models = require('../models/index.js');

module.exports = {
  postNotification: async (req, res) => {
    try {
      let array = [];


      for(var keys in req.body) {
        array.push(req.body[keys]);
      }
      //console.log(array);
      const queryData = await models.notifications.addNotification(array);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },
};