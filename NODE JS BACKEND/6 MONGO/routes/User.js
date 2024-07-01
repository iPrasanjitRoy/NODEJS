var express = require("express");
var router = express.Router();

const UserModel = require("../model/User");


router.get("/create", async function (req, res) {
    try {
        const CreatedUser = await UserModel.create({
            username: "Hello10 ",
            email: "Hello10@Google.com",
            password: "Hello@12345"
        });
        // res.send(CreatedUser) 
        res.send("User Created Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error In Creating User");
    }
});


router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Fetching Users');
    }
});

module.exports = router; 