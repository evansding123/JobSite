const models = require('../models/index.js');

module.exports = {
  postNotification: async (req, res) => {
    try {
      console.log(req.body);
      const queryData = await models.notifications.addNotification(req.body);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },
};