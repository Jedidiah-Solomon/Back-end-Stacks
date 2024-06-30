const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/home") {
        fs.readFile(path.join(__dirname, "src", "index.html"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/about") {
        fs.readFile(
            path.join(__dirname, "src", "pages", "aboutUs.html"),
            (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                    return;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        );
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

const PORT = 3000;
const HOST = "0.0.0.0";

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
