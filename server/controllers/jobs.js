const models = require('../models/index.js');

module.exports = {
  postJob: async (req, res) => {
    try {
      const queryData = await models.jobs.addJob(req.body);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },
}