const models = require('../models/index.js');

module.exports = {
  postNote: async (req, res) => {
    try {
      const queryData = await models.notes.addNote(req.body);
      res.status(201).send(queryData);
    } catch (error) {
      res.status(404).send(error);
    }
  },
}