/* Required Modules */
const express = require('express');
const morgan = require('morgan');
const server = express();

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

/* Middleware Setup */
server.use(express.json());
server.use(morgan('default'));

server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(8080, () => {
  console.log('Server Started :: 8080');
});