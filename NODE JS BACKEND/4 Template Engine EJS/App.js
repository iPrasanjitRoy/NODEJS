/* Required Modules */
const express = require('express');
const path = require('path'); // Require The Path Module 

/* Express Application Setup */
const app = express();
const port = 3000;

// Set The View Engine To EJS
app.set('view engine', 'ejs');

// Set The Views Directory 
app.set('views', path.join(__dirname, 'views'));

// Serve Static Files From The Public Directory 
app.use(express.static(path.join(__dirname, 'public')));

// Define A Route 
app.get('/', (req, res) => {
    res.render('index', { MyName: "Prasanjit" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
