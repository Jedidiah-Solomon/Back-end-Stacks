const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1> <p>Server App </p>");
    res.write(req.url);
    res.end();
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running at http://localhost:3000/");
    console.log("Server running at http://127.0.0.1:3000/");
});
