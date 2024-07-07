const express = require("express");
const app = express();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();
app.use(express.json());

const Port = process.env.PORT || 3000;

const posts = [
    {
        username: "John",
        title: "Post 1",
    },
    {
        username: "Charles",
        title: "Post 2",
    },
];

// Public Route
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

// Login Route
app.post("/login", (req, res) => {
    // Authenticate user
    const username = req.body.username;
    const user = { name: username };

    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    const accessToken = jwt.sign(user, accessTokenSecret);

    res.json({ accessToken: accessToken });
});

// Middleware to Authenticate Token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Protected Route
app.get("/protected", authenticateToken, (req, res) => {
    res.status(200).send("This is a protected route");
});

app.listen(Port, () => {
    console.log(`Server running at port ${Port}`);
});
