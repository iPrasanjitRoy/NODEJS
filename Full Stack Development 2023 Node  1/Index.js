const lib = require('./Library.js');
const express = require('express');
const fs = require('fs');


console.log(lib.sum(5, 5), lib.diff(10, 10));


const txtdata = fs.readFileSync('Demo.txt', 'utf-8');
console.log(txtdata);
console.log('Hello World!');

const t1 = performance.now();

fs.readFile('Demo.txt', 'utf-8', (err, txt) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(txt);
});
console.log('Hello World!');

const t2 = performance.now();
console.log(t2 - t1);


const server = express();
server.listen(8080);
