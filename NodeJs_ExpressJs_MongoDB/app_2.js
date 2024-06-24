const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3002;

fs.readFile("index.htmlllllllll", (error, html) => {
    const server = http.createServer((req, res) => {
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

    server.listen(port, hostname, () => {
        console.log("Server started on port " + port);
    });
});
