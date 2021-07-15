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
 getAccount: async (req, res) => {
    try {
      console.log(req.body);
      const queryData = await models.accounts.getAccount(req.body);
      res.status(200).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },
}

