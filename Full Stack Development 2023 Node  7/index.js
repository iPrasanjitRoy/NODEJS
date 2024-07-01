require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const server = express();
const productRouter = require('./routes/product')


/* DB Connection */
/*
async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/ecommerce');
    console.log('Database Connected');
    console.log('Database Connected');
  } catch (err) {
    console.error('Error Connecting To Database:', err.message);
    console.log(err);
  }
}
main();
*/
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(() => console.log('Database Connected From Index')).catch(err => console.error('Error Connecting To Database From Index:', err.message));

server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));

server.use('/products', productRouter.router);

server.listen(process.env.PORT, () => {
  console.log('Server Started');
});
