const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        //from root directory
        fs.readFile("index.html", (error, html) => {
            if (error) {
                res.statusCode = 404;
                res.setHeader("Content-type", "text/plain");
                res.end("404 Not Found: The requested file does not exist.");
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.write(html);
            res.end();
        });
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        res.end("About Us: This is a simple HTTP server example.");
        console.log("Served About Us page");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/plain");
        res.end("404 Not Found: The requested URL does not exist.");
        console.log("Page Not Found for URL:", req.url);
    }
});

server.listen(port, hostname, () => {
    console.log("Server started on port " + port);
});
