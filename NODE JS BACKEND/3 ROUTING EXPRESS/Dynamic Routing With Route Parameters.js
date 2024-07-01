const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome To The Home Page!');
}); 


// Route With A Dynamic Parameter 
app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
});



app.get('/product/:categoryId/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.send(`Category ID: ${categoryId}, Product ID: ${productId}`);
});


app.get('/order/:orderId?', (req, res) => {
    const orderId = req.params.orderId;
    if (orderId) {
        res.send(`Order ID: ${orderId}`);
    } else {
        res.send('No Order ID provided');
    }
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


