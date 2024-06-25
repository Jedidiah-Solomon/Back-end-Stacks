const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

//Middleware
const logger = (req, res, next) => {
    console.log("Logging...");
    next();
};

app.use(logger);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//End of middleware - Ensure it comes in the correct order - before a request for instance. This middleware function logs "Logging..." to the console every time a request is made to the server.

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send(`<h1>Hello user, you're welcome!</h1> <p>Web Development!</p>`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
