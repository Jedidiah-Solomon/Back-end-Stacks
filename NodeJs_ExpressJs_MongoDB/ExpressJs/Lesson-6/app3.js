const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3005;

// Middleware
app.use(bodyParser.json());

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page - http://localhost:3005
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Route for handling signup
app.post("/signup", (req, res) => {
    // Handle signup logic
    res.send("Signup successful");
});

// Route for handling login
app.post("/login", (req, res) => {
    // Handle login logic
    res.send("Login successful");
});

// Route for handling user update
app.put("/updateUser", (req, res) => {
    // Handle update user logic
    res.send("User updated successfully");
});

// Route for handling user delete
app.delete("/deleteUser", (req, res) => {
    // Handle delete user logic
    res.send("User deleted successfully");
});

// Error handler middleware for 404 Not Found
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
