/* Required Modules */
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const server = express();

const productRouter = require('./routes/product')

/* Database Connection */
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(() => console.log('Database Connected From Index')).catch(err => console.error('Error Connecting To Database From Index:', err.message));

/* Middleware Setup */
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use(morgan('default'));

server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

server.use('/products', productRouter.router);

/* "*" Is Used As The Path, It Acts As A Wildcard, Matching Any Path That Hasn't Been Matched By Previous Middleware Or Routes. */
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

/*  Server Start */
server.listen(process.env.PORT, () => {
  console.log('Server Started', process.env.PORT);
});
