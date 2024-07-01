/* Required Modules */
const fs = require('fs');
const model = require('../model/product')
const Product = model.Product;
const ejs = require('ejs');
const path = require('path');

/* View Controller Functions  */
/*
exports.getAllProductsSSR = async (req, res) => {
  const products = await Product.find();
  ejs.renderFile(path.resolve(__dirname, '../pages/index.ejs'), { products: products }, function (err, str) {
    res.send(str);
  });

};
*/

exports.getAllProductsSSR = async (req, res) => {
  try {
    const products = await Product.find();
    ejs.renderFile(path.resolve(__dirname, '../pages/index.ejs'), { products: products }, function (err, str) {
      if (err) {
        console.log(err);
        res.status(500).send('Error Rendering EJS Template');
      } else {
        res.send(str);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/*
exports.getAddForm = async (req, res) => {
  ejs.renderFile(path.resolve(__dirname, '../pages/add.ejs'), function (err, str) {
    res.send(str);
  });

};
*/

exports.getAddForm = async (req, res) => {
  try {
    ejs.renderFile(path.resolve(__dirname, '../pages/add.ejs'), function (err, str) {
      if (err) {
        console.log(err);
        res.status(500).send('Error Rendering EJS Template');
      } else {
        res.send(str);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/* Previous Controller Functions */
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save((err, doc) => {
    console.log({ err, doc })
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(doc);
    }
  })

};

/* Retrieves All Products, Optionally Paginated And Sorted Based On Query Parameters */

exports.getAllProducts = async (req, res) => {
  let query = Product.find(); /* Creates A Base Query To Find All Products */
  let pageSize = 4; /* Number Of Products Per Page */
  // let page = req.query.page; /* Page Number From Query Parameters */
  let page = req.query.page || 1; /* Default To Page 1 */


  console.log(req.query);
  const totalCount = await Product.countDocuments();
  console.log(totalCount);

  /* Check If Sort Parameter Is Provided In Query */
  /* Req.Query.Sort Refers To The Field By Which You Want To Sort (Example - Price) & Req.Query.Order Specifies The Sorting Order */
  /* If PageSize Is 10 And Page Is 2, It Skips The First 10 Documents To Fetch Documents For The Second Page (Documents 11-20). */
  /* For Page = 1: Skip(Pagesize * (1 - 1)) Simplifies To Skip(0), Meaning No Documents Are Skipped, */

  /* This Method Limits The Number Of Documents Returned  */
  /* This Method Executes The Mongoose Query Asynchronously And Returns A Promise */

  if (req.query.sort) {
    const products = await query.sort({ [req.query.sort]: req.query.order }).skip(pageSize * (page - 1)).limit(pageSize).exec();
    res.set('X-Total-Count', totalCount);
    res.json(products);
  } else if (req.query.page) {
    const products = await query.skip(pageSize * (page - 1)).limit(pageSize).exec();
    res.set('X-Total-Count', totalCount);
    res.json(products);
  } else if (req.query.page && req.query.sort) {
    const products = await query.sort({ [req.query.sort]: req.query.order }).skip(pageSize * (page - 1)).limit(pageSize).exec();
    res.set('X-Total-Count', totalCount);
    res.json(products);
  } else {
    const products = await query.limit(pageSize).exec();
    res.set('X-Total-Count', totalCount);
    res.json(products);
  }
};


/*
exports.getAllProducts = async (req, res) => {
  let query = Product.find();
  let pageSize = 4;
  let page = req.query.page;

  if (req.query.sort) {
    const products = await query.sort({ [req.query.sort]: req.query.order }).skip(pageSize * (page - 1)).limit(pageSize).exec();
    res.json(products);
  } else if (req.query.page) {
    const products = await query.skip(pageSize * (page - 1)).limit(pageSize).exec();
    res.json(products);
  } else {
    const products = await query.exec();
    res.json(products);
  }
};
*/

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log({ id })
  const product = await Product.findById(id);
  res.json(product);
};

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