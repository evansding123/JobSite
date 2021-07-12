const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001 || process.env.PORT;
const router = express.Router();



app.use(express.json());
app.use(express.static('./dist'));




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});