// Importações necessárias para o servidor
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model') // Importa o model do produto
require('dotenv').config(); // Carrega variáveis do .env

const app = express()

app.use(express.json ()); // Permite que o Express entenda JSON no corpo das requisições

// Rota raiz
app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

// Rota para criar um novo produto 
app.post('/api/products', async(req, res) =>{
  try {
      const product = await Product.create(req.body);
  } catch (error) {
      res.status(500).json({messege: error.message})
  }
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
