const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

//Middlewares
const logger = (req, res, next) => {
    console.log("Logging...");
    console.log(req.originalUrl);
    next();
};

const auth = (req, res, next) => {
    if (req.query.admin === "true") {
        req.admin = true;
        next();
    } else {
        console.log("Not an admin please, check credentials!");
        res.send(`No authentication. You can't log in!`);
    }
};

app.use(logger);

app.get("/users", auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`);
    console.log(`You're Logged in now!`);
    res.send(`You're Logged in now!`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});

//Run http://localhost:3000/users and you wont log in
//But when you run http://localhost:3000/users?admin=true you will belogged in
