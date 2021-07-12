const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const router = require('./routes.js');
const morgan = require('morgan');


app.use(express.json());
app.use(express.static('./dist'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;