/* Imports & Setup */
require('dotenv').config()
// require('./events.js');

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const server = express();

const path = require('path');

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')

const publicKey = fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf-8')

/* Database Connection */
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(() => console.log('Database Connected From Index')).catch(err => console.error('Error Connecting To Database From Index:', err.message));


/* Authentication Middleware */

const auth = (req, res, next) => {

  try {
    const token = req.get('Authorization').split('Bearer ')[1];
    console.log(token);
    var decoded = jwt.verify(token, publicKey);
    if (decoded.email) {
      next()
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    res.sendStatus(401)
  }
  console.log(decoded)


};

/* Express Middleware */
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use(morgan('default'));

server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

/* Express Middleware Route Handling */

server.use('/auth', authRouter.router)
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);


server.listen(process.env.PORT, () => {
  console.log('Server Started', process.env.PORT);
});