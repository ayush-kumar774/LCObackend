require("dotenv").config();
require('./config/database').connect();
const express = require('express');

const User = require('./model/user')

const app = express();

app.get("/" , (req, res) => {
        res.send("<h1>Hello from auth system</h1>");
});

app.post("/register", async (req, res) => {
        const {firstname, lastname, email, password } = req.body;

        if (!(firstname && lastname && email && password)) {
                res.status(400).send("Name, email and password fields are mandatory");
                // return res.status(400).send("Name, email and password fields are mandatory"); above line and this line are same
                // after res.send() none of the line gets executed.
        }

        const existingUser = await User.findOne({ email }); // PROMISE

        if (existingUser) {
                res.status(401).send("User already exists");
        }

});

module.exports = app;
