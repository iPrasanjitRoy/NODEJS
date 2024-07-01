const mongoose = require("mongoose");

/* Connecting To MongoDB */
mongoose.connect("mongodb://127.0.0.1:27017/DBName");


// Define The User Schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create The User Model 
const User = mongoose.model('User', userSchema);


module.exports = User;  
