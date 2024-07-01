const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Middleware Setup 
app.use(cookieParser());

app.use(session({
    secret: 'mysecret', // Replace With A Long, Randomly Generated String 
    resave: false,
    saveUninitialized: true
}));

// Routes

// Route To Set A Cookie 
app.get('/setcookie', (req, res) => {
    res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true });
    res.send('Cookie is set');
});

// Route To Get The Cookie Value 
app.get('/getcookie', (req, res) => {
    const cookieValue = req.cookies.myCookie;
    res.send('Value of myCookie: ' + cookieValue);
});

// Route To Clear The Cookie 
app.get('/clearcookie', (req, res) => {
    res.clearCookie('myCookie');
    res.send('Cookie cleared');
});

// Route  To Set A Session Variable 
app.get('/setsession', (req, res) => {
    req.session.mySession = 'sessionValue';
    res.send('Session is set');
});

// Route To Get The Session Variable 
app.get('/getsession', (req, res) => {
    const sessionValue = req.session.mySession;
    res.send('Value of mySession: ' + sessionValue);
});

// Route To Destroy The Session 
app.get('/destroysession', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error destroying session');
        }
        res.send('Session destroyed');
    });
});

// Default Route
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 