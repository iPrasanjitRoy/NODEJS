/* Environment Variable */
require('dotenv').config()

/* Express & Middleware Setup */
const express = require('express');
const morgan = require('morgan');
const server = express();

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));

server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>")
})

server.listen(process.env.PORT, () => {
  console.log(`Server started On Port ${process.env.PORT}`);

});