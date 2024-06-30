const http = require("http");
const dNow = require("./myfirstmodule");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dNow.myDateModule());
    res.write(`I like you`);
    res.end("<h1>Hello World</h1>"); //This shows at the end OR use  res.end();
}).listen(3500, "0.0.0.0", () => {
    console.log("Server running at http://localhost:3500/");
    console.log("Server running at http://127.0.0.1:3500/");
});
/*











// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time are currently: " + dNow.myDateModule());
//     res.write(`I like you`);
//     res.end("<h1>Hello World</h1>"); //This shows at the end
// });
// server.listen(3500, "0.0.0.0", () => {
//     console.log("Server running at http://localhost:3500/");
//     console.log("Server running at http://127.0.0.1:3500/");
// });

*/
