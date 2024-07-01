/* Initial Setup */
const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('Data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const server = express();
// const morgan = require('morgan');  

/* Middleware Setup */
/* Body Parser -- Built in Middleware -- Application Level Middleware */
server.use(express.json());
// server.use(express.static('public'));

server.use(express.urlencoded());
/* Third Party Middleware */
// server.use(morgan('default')) 

server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get('User-Agent')
  );
  next();
});

/* Authentication Middleware -- Custom Middleware -- Route Level Middleware */
const auth = (req, res, next) => {
  console.log(req.query);

  if (req.body.password == '123') {
    next();
  } else {
    res.sendStatus(401);
  }


};


// API - Endpoint - Route

server.get('/product/:id', (req, res) => {
  console.log(req.params)
  res.json({ type: 'GET' });
});

server.get('/', (req, res) => {
  // res.json({ type: 'GET' }); 
  if (products.length > 0) {
    const product = products[0];
    let modifiedIndex = index
      .replace('**title**', product.title)
      .replace('**url**', product.thumbnail)
      .replace('**price**', product.price)
      .replace('**rating**', product.rating);

    res.send(modifiedIndex);
  } else {
    res.status(404).send('No Products Found.');
  }

});


server.post('/', auth, (req, res) => {
  res.json({ type: 'POST' });
});

server.put('/', (req, res) => {
  res.json({ type: 'PUT' });
});

server.delete('/', (req, res) => {
  res.json({ type: 'DELETE' });
});

server.patch('/', (req, res) => {
  res.json({ type: 'PATCH' });
});


server.get('/Demo', (req, res) => {
  // res.sendStatus(404);
  // res.json(products);
  // res.status(201).send('<h1>Hello World!</h1>');
  res.sendFile('C:\\Users\\PRASANJIT\\Desktop\\NODEJS\\Full Stack Development 2023 Node  3\\public\\index.html');


});


server.listen(8080, () => {
  console.log('Server Started : 8080');
});
