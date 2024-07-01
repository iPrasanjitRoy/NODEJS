const express = require('express');
const productController = require('../controller/product');

const router = express.Router();
/* 
  router
    .post('/', productController.createProduct)
    .get('/', productController.getAllProducts)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)
    .get('/demo', productController.Demo);

*/

router
  .post('/create', productController.createProduct)
  .get('/getAllProducts', productController.getAllProducts)
  .get('/demo', productController.Demo) // Place This Route Before The Wildcard Route 
  .get('/:id', productController.getProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

exports.router = router;