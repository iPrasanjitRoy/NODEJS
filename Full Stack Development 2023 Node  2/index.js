const http = require('http');
const fs = require('fs');

const myindex = fs.readFileSync('myindex.html', 'utf-8');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('Data.json', 'utf-8'));
const products = data.products;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url.startsWith('/product')) {
    const id = req.url.split('/')[2]
    const product = products.find(p => p.id === (+id)) // // Finding Product By ID 

    if (!product) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Product Not Found');
      return;
    }

    console.log(product)

    res.setHeader('Content-Type', 'text/html');
    let modifiedIndex = myindex.replace('**title**', product.title)
      .replace('**url**', product.thumbnail)
      .replace('**price**', product.price)
      .replace('**rating**', product.rating)
    res.end(modifiedIndex);
    return;
  }

  switch (req.url) {

    case '/':
      res.end(index);
      break;
    case '/api':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      break;
    case '/Show':
      res.end("<h1>Hello World !</h1>");
      break;

    default:
      res.writeHead(404);
      res.end();
  }

  console.log('Server Started!');
  // res.setHeader('Dummy', 'DummyValue');
});

server.listen(8080); 