const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3502;

const server = http.createServer((req, res) => {
    // Check if the request URL is "/" or "/index.html"
    if (req.url === "/" || req.url === "/inde.htmlx") {
        // Set the status code to 200 (OK)
        res.statusCode = 200;
        // Set the Content-Type header to "text/html"
        res.setHeader("Content-Type", "text/html");
        // Read the "me.txt" file
        fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
            // Handle any errors that occur while reading the file
            if (err) {
                if (err.code === "ENOENT") {
                    // File not found error
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/plain");
                    res.end("404 Not Found");
                } else {
                    // Other errors
                    res.statusCode = 500;
                    res.end("Error loading file");
                }
                return;
            }
            // Send the contents of the file as the response
            res.end(data);
        });
    } else {
        // If the URL is not "/" or "/index.html", respond with a 404 error
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("404 Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}/`);
});
