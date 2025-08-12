// Importações necessárias para o servidor
const express = require('express');

const mongoose = require('mongoose');

const Product = require('./models/product.model.js'); // Importa o model do produto

const productRoute = require('./routes/product.route.js');

require('dotenv').config(); // Carrega variáveis do .env

const app = express()

app.use(express.json()); // Permite que o Express entenda JSON no corpo das requisições


//routes
app.use('/api/products', productRoute);


// Rota raiz
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
