const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  })
