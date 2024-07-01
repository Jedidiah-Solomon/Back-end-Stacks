const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "signup.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "login.html"));
});

app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;
    console.log(
        `Signup - Username: ${username}, Email: ${email}, Password: ${password}`
    );
    res.send("Signup successful!");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(`Login - Email: ${email}, Password: ${password}`);
    res.send("Login successful!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
