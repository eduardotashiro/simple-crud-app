// Importações necessárias para o servidor
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model') // Importa o model do produto
require('dotenv').config(); // Carrega variáveis do .env

const app = express()

app.use(express.json()); // Permite que o Express entenda JSON no corpo das requisições

// Rota raiz
app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

//All products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})

//Get By Id
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ messege: error.message })
  }
})


// Created Product
app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ messege: error.message });
  }
});

//update a product
app.put('/api/product/:id', async(req, res) =>{
  try {
    const {id} = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if(!product){
      return res.status(404).json({menssage: "Product not found"});
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct)

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// delete a product

app.delete('/api/product/:id', async (req, resp) =>{
  try {
    
  } catch (error) {
    
  }
})


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
