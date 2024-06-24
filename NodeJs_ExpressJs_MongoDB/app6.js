const http = require("http");

const hostname = "127.0.0.1";
const port = 3501;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    //res.statusMessage = "Not found";//Success,
    res.setHeader("Content-type", "text/plain");
    res.end("Hello !!! student, how  are you today men?");
});

server.listen(port, hostname, () => {
    console.log(`Server started at port ${port}`);
});

//chain method

// res.statusCode = (200)
//     .setHeader("Content-type", "text/plain")
//     .end("Hello !!! student, how  are you today men?");
