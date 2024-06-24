const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;

//Create server using the http module
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello Bathphage student");
});

//localhost:3000 or 127.0.0.1:3000
server.listen(port, hostname, () => {
    console.log("Server started on port " + port);
});
