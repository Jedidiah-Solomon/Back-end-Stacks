const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3501;

const server = http.createServer((req, res) => {
    // Serve HTML file
    if (req.url === "/" || req.url === "/index.html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading file");
                return;
            }
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("404 Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}/`);
});
