const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // Parse the incoming request URL
    const parsedURL = new URL(req.url, `http://${req.headers.host}`); //req.url would be /about?name=John AND req.headers.host would be localhost:3000.

    // Log various parts of the parsed URL
    console.log("Parsed URL:", parsedURL.href); // Full URL
    console.log("Protocol:", parsedURL.protocol); // Protocol
    console.log("Host:", parsedURL.host); // Host
    console.log("Hostname:", parsedURL.hostname); // Hostname
    console.log("Port:", parsedURL.port); // Port (if any)
    console.log("Pathname:", parsedURL.pathname); // Pathname
    console.log("Search:", parsedURL.search); // Query string
    console.log("Hash:", parsedURL.hash); // Fragment

    // Serve files based on the request URL
    if (parsedURL.pathname === "/" || parsedURL.pathname === "/home") {
        fs.readFile(path.join(__dirname, "src", "index.html"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (parsedURL.pathname === "/about") {
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
const HOST = "127.0.0.1";

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

// Additional URL operations for demonstration

// Parse a URL string into an object
const myURL = new URL(
    "http://www.example.com:8080/path/name?query=string#hash"
);

console.log("Original URL:", myURL.href); // 'http://www.example.com:8080/path/name?query=string#hash'
console.log("Protocol:", myURL.protocol); // 'http:'
console.log("Host:", myURL.host); // 'www.example.com:8080'
console.log("Hostname:", myURL.hostname); // 'www.example.com'
console.log("Port:", myURL.port); // '8080'
console.log("Pathname:", myURL.pathname); // '/path/name'
console.log("Search:", myURL.search); // '?query=string'
console.log("Hash:", myURL.hash); // '#hash'

// Format a URL object back into a URL string
const formattedURL = url.format(myURL);
console.log("Formatted URL:", formattedURL); // 'http://www.example.com:8080/path/name?query=string#hash'

// Resolve a target URL relative to a base URL
const baseURL = "http://www.example.com/";
const targetURL = "/path/name";
const resolvedURL = url.resolve(baseURL, targetURL);
console.log("Resolved URL:", resolvedURL); // 'http://www.example.com/path/name'
