const fs = require('fs');
const model = require('../model/product')
const mongoose = require('mongoose');
const Product = model.Product;

/* ERROR FINDING PURPOSE */
exports.Demo = (req, res) => {
  res.status(200).send('Hello World');
};


/* Create Product */
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  console.log(req.body);
  console.log(product);
  product.save((err, doc) => {
    console.log({ err, doc })
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(doc);
    }
  })
};

/* Get All Products */
exports.getAllProducts = async (req, res) => {
  const filterProducts = await Product.find({ price: { $gt: 500 } });
  const products = await Product.find({});
  res.json(products);
};

/* Get Product By ID */
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({ id })
  const product = await Product.findById(id);
  res.json(product);
};

/* Same With Error Handling */
let getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product Not Found' });
    }
    res.json(product);
  } catch (err) {
    console.error('Error Fetching Product:', err);
    res.status(400).json({ error: 'Error Fetching Product' });
  }
};

/* Replace Product */
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

/*
👉 findOneAndReplace(filter, replacement, options, callback)  
filter: { _id: id } 👉 This Specifies The Criteria For Finding The Document To Replace 
replacement: req.body  👉  This Contains The New Data That Will Replace The Found Document 
options: { new: true } 👉  This Specifies Options For The Operation. New: True Ensures That The Method Returns The Modified Document Rather Than The Original Document Before Modification.  
*/

/* Update Product */
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

/* Delete Product */
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id })
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
