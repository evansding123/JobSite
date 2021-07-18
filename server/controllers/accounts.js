const models = require('../models/index.js');

module.exports = {
  postAccount: async (req, res) => {
    try {
      const queryData = await models.accounts.addAccount(req.body);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getAccountId: async (req, res) => {
    try {
      const queryData = await models.accounts.getAccountId(req.params);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
}