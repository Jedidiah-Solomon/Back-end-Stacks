const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // Parse the incoming request URL
    const parsedURL = new URL(req.url, `http://${req.headers.host}`);

    // Log various parts of the parsed URL
    console.log("Parsed URL:", parsedURL.href); // Full URL
    console.log("Protocol:", parsedURL.protocol); // Protocol
    console.log("Host:", parsedURL.host); // Host
    console.log("Hostname:", parsedURL.hostname); // Hostname
    console.log("Port:", parsedURL.port); // Port (if any)
    console.log("Pathname:", parsedURL.pathname); // Pathname
    console.log("Search:", parsedURL.search); // Query string
    console.log("Hash:", parsedURL.hash); // Fragment

    // Serve static files from the scripts directory
    if (parsedURL.pathname.startsWith("/scripts/")) {
        const scriptPath = path.join(__dirname, "src", parsedURL.pathname);
        fs.readFile(scriptPath, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404 Not Found");
                return;
            }
            res.writeHead(200, { "Content-Type": "application/javascript" });
            res.end(data);
        });
        return;
    }

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
    } else if (parsedURL.pathname === "/userdetails") {
        // Serve the userdetails.html page and log form details
        const query = parsedURL.searchParams;
        const formDetails = {
            username: query.get("username"),
            email: query.get("email"),
            dob: query.get("dob"),
            country: query.get("country"),
        };
        console.log("Form Details:", formDetails);

        fs.readFile(
            path.join(__dirname, "src", "pages", "userdetails.html"),
            (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                    return;
                }
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.write(
                    `<div id="form-details">Form Details: ${JSON.stringify(
                        formDetails
                    )}</div>
                    <div><h2>User Details Formatted:</h2>${
                        formDetails.username
                    }<br>${formDetails.email}</div>`
                );
                res.end();
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
