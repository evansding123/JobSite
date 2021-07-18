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
    try {
      const queryData = await models.notes.getNotes(req.body);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getOneNote: async (req, res) => {
    try {
      const queryData = await models.notes.getOneNote(req.params);
      console.log(req.params);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  updateNote: async (updatedNote, id) => {
    const query = `UPDATE notes SET note = $1 WHERE id = $2`;;
    try {
      const queryData = await models.notes.updateNote(req.body);
      res.status(200).send(queryData.rows);
    } catch (error) {
      res.status(404).send(error);
    }
  },
}