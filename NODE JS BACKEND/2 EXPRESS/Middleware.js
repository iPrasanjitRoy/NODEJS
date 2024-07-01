const express = require('express');
const app = express();


const simpleLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(simpleLogger);

app.use(function (req, res, next) {
    console.log("Middleware Hit!");
    next();

});



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/About', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
