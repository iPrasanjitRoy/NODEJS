/* Required Modules */
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const server = express();
const data = JSON.parse(fs.readFileSync('Data.json', 'utf-8'));
const products = data.products;

/* Middleware Setup */
server.use(express.json()); // Body  Parsar 
server.use(morgan('default')) // // Logging HTTP Requests 

/* API - Endpoint - Route */
/* API ROOT , Base URL, Example - Google.com/api/v2/ */

/* C R U D */

// Create POST /products     
server.post('/products', (req, res) => {
  console.log(req.body);
  products.push(req.body); //  Add New Product To The 'products' Array 
  res.status(201).json(req.body);
});

// Read GET /products
server.get('/products', (req, res) => {
  res.status(400).json(products);
});

// Read GET /products/:id
server.get('/products/:id', (req, res) => {
  const id = +req.params.id; // Extract Product ID From URL Parameter 
  const product = products.find(p => p.id === id)
  res.json(product);
});

// Update PUT /products/:id
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id)
  products.splice(productIndex, 1, { ...req.body, id: id }); // Replace Product With Updated Data 
  res.status(201).json();
});

// Update PATCH /products/:id
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id)
  const product = products[productIndex]; // Get Existing Product 
  products.splice(productIndex, 1, { ...product, ...req.body }) // Merge Existing And New Data 
  res.status(201).json();
});

// Delete DELETE /products/:id
server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id)
  const product = products[productIndex];
  products.splice(productIndex, 1)
  res.status(201).json(product);
});

server.listen(8080, () => {
  console.log('Server Started : 8080');
}); 