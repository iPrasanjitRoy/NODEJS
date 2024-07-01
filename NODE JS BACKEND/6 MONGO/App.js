const express = require('express')
const app = express()
const port = 3000

// Import Index.js Which Contains Additional Routes Or Middleware 
const UserRouter = require('./routes/User');

// Mount The IndexRouter Under The / Route 
app.use('/', UserRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 