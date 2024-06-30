const http = require("http");
const EventEmitter = require("events");
const fs = require("fs");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const server = http.createServer((req, res) => {
    // Emit a custom event when the server receives a request
    myEmitter.emit("requestReceived", req.url);

    // Read from file3.txt
    fs.readFile("./src/files/file3.txt", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
            myEmitter.emit("error", err);
            return;
        }
        console.log("Content read from file3.txt:", data);

        // Respond to client
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`Hello World! Content from file3.txt: ${data}`);
        res.end();
    });

    // Event for opening a file
    const rs = fs.createReadStream("./src/files/file3.txt");
    rs.on("open", () => {
        console.log("The file3.txt is open");
    });
});

// Define the 'requestReceived' event
myEmitter.on("requestReceived", (url) => {
    console.log(`Request received for URL: ${url}`);
});

// Define an 'error' event
myEmitter.on("error", (err) => {
    console.error("Error event:", err);
});

const PORT = 3000;
const HOST = "127.0.0.1";

// Start the server
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
