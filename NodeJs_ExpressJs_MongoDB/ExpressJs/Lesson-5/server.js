const express = require("express");
const path = require("path");
const pageRouter = require("./routes/page-router");

const app = express();
const port = 3005;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page - http://localhost:3005
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Use the page router for all other page routes
app.use(pageRouter);

// Error handler middleware for 404 Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
