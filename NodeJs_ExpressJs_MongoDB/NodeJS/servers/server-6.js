const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // Read from file3.txt
    fs.readFile("./src/files/file3.txt", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
            return console.error("Error reading from file3.txt:", err);
        }
        console.log("Content read from file3.txt:", data);

        // Respond to client
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`Hello World! Content from file3.txt: ${data}`);
        res.end();
    });

    // Event for opening a file
    var rs = fs.createReadStream("./src/files/file3.txt");
    rs.on("open", function () {
        console.log("The demofile file3 is open");
    });
});

const PORT = 3000;
const HOST = "127.0.0.1";

// Start the server
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
