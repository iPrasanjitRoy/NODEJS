var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

var app = express();

// View Engine Set Up  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app; 