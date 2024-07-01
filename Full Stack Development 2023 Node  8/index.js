require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const productRouter = require('./routes/product')

const server = express();

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(() => console.log('Database Connected From Index')).catch(err => console.error('Error Connecting To Database From Index:', err.message));

/* For Handling Cross-Origin Resource Sharing */
server.use(cors());
server.use(express.json());
server.use(morgan('default'));

server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

server.use('/products', productRouter.router);

server.listen(process.env.PORT, () => {
  console.log('Server Started');
});
