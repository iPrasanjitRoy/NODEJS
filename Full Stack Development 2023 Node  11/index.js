/* Imports & Setup */
require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')

const server = express();

const publicKey = fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf-8')

/* Database Connection */
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(() => console.log('Database Connected From Index')).catch(err => console.error('Error Connecting To Database From Index:', err.message));


const auth = (req, res, next) => {

  try {
    // Extract The JWT Token From The Authorization Header
    const token = req.get('Authorization').split('Bearer ')[1];
    console.log(token);
    // Verify The JWT Token Using The Provided Public Key 
    var decoded = jwt.verify(token, publicKey);
    console.log(decoded);
    // Check If Decoding Was Successful And If The Decoded Token Contains An Email Field
    // If Email Field Exists, Proceed To The Next Middleware Function 
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

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use(morgan('default'));

server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

server.use('/auth', authRouter.router)

server.use('/products', auth, productRouter.router);
server.use('/users', auth, userRouter.router);

server.listen(process.env.PORT, () => {
  console.log('Server Started', process.env.PORT,);
});