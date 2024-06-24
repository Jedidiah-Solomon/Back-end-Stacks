const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3005;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page - http://localhost:3005
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Route for the login page - http://localhost:3005/login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "login.html"));
});

// Route for the about page - http://localhost:3005/about  using another approach
app.get("/about", (req, res) => {
    // Read about.html file asynchronously
    fs.readFile(
        path.join(__dirname, "src", "pages", "about.html"),
        "utf8",
        (err, data) => {
            if (err) {
                console.error("Error reading about.html:", err);
                res.status(500).send("Internal Server Error");
                return;
            }
            res.send(data); // Send the contents of about.html
        }
    );
});

// Route for the news page - http://localhost:3005/news
app.get("/news", (req, res) => {
    try {
        // Read about.html file synchronously
        const newsPage = fs.readFileSync(
            path.join(__dirname, "src", "pages", "news.html"),
            "utf8"
        );
        res.send(newsPage); // Send the contents of news.html
    } catch (err) {
        console.error("Error reading news.html:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Error handler middleware for 404 Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
