/* Require Express & Product Controller */
const express = require('express');
const productController = require('../controller/product');

const router = express.Router();

router
  .post('/create', productController.createProduct)
  .get('/getAllProductsSSR', productController.getAllProductsSSR)
  .get('/getAddFormSSR', productController.getAddForm)
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct)


exports.router = router;  