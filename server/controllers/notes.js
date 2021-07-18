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
  getNotes: async (req, res) => {
    //console.log(req.params, 'asdfasdf');
    try {
      const queryData = await models.notes.getNotes(req.params);
      console.log(queryData);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getOneNote: async (req, res) => {
    try {
      const queryData = await models.notes.getOneNote(req.params);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  updateNote: async (req, res) => {
    try {
      const queryData = await models.notes.updateNote(req.body);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  deleteNote: async (req, res) => {
    try {
      const queryData = await models.notes.deleteNote(req.params);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
}