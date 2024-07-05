import express from "express";
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Example route for demonstrating req properties
app.get("/example", (req, res) => {
    // req.app
    console.log("Express app title:", req.app.get("title"));

    // req.baseUrl
    console.log("Base URL:", req.baseUrl);

    // req.body (This will only work for POST/PUT requests)
    console.log("Request body:", req.body);

    // req.cookies (Requires cookie-parser middleware, example below)
    console.log("Cookies:", req.cookies);

    // req.fresh / req.stale
    console.log("Is the request fresh?", req.fresh);
    console.log("Is the request stale?", req.stale);

    // req.headers
    console.log("Request headers:", req.headers);

    // req.hostname
    console.log("Request hostname:", req.hostname);

    // req.ip
    console.log("Client IP address:", req.ip);

    // req.ips (if trust proxy setting is enabled)
    console.log("Client IP addresses:", req.ips);

    // req.method
    console.log("HTTP method:", req.method);

    // req.originalUrl
    console.log("Original URL:", req.originalUrl);

    // req.params
    console.log("Route parameters:", req.params);

    // req.path
    console.log("URL path:", req.path);

    // req.protocol
    console.log("Request protocol:", req.protocol);

    // req.query
    console.log("Query parameters:", req.query);

    // req.route
    console.log("Current route:", req.route);

    // req.secure
    console.log("Is the connection secure?", req.secure);

    // req.signedCookies (Requires cookie-parser middleware with a secret, example below)
    console.log("Signed cookies:", req.signedCookies);

    // req.subdomains
    console.log("Subdomains:", req.subdomains);

    // req.xhr
    console.log("Is the request an XMLHttpRequest?", req.xhr);

    res.send("Check the console for details on the request object properties.");
});

// Accessing Request Headers
app.get("/", (req, res) => {
    console.log(req.headers["content-type"]);
    res.send("Check the console for the Content-Type header");
});

// Accessing Query Parameters
app.get("/search", (req, res) => {
    const searchTerm = req.query.q;
    res.send(`You searched for: ${searchTerm}`);
});

// Accessing Route Parameters
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Accessing Request Body (with body-parser middleware)
app.post("/users", (req, res) => {
    const userName = req.body.name;
    res.send(`User name is: ${userName}`);
});

// Middleware example for setting a custom property (app title)
app.use((req, res, next) => {
    req.app.set("title", "My Express App");
    next();
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

/*
So visit this url on the browser: http://localhost:3000/example

Result on console :

Server running at http://localhost:3000

Express app title: My Express App
Base URL:
Request body: {}
Is the request fresh? false
Is the request stale? true
Request headers: {
  host: 'localhost:3000',
  connection: 'keep-alive',
  'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"
',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (K
HTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,imag
e/webp,image/apng,;q=0.8,application/signed-exchange;v=b3;q=0.7',
'sec-fetch-site': 'none',
'sec-fetch-mode': 'navigate',
'sec-fetch-user': '?1',
'sec-fetch-dest': 'document',
'accept-encoding': 'gzip, deflate, br, zstd',
'accept-language': 'en-US,en;q=0.9',
cookie: 'SL_G_WPT_TO=en; SL_GWPT_Show_Hide_tmp=undefined; SL_wptGlobTipTmp=und
efined'
}
Request hostname: localhost
Client IP address: ::1
Client IP addresses: []
HTTP method: GET
Original URL: /example
Route parameters: {}
URL path: /example
Request protocol: http
Query parameters: {}
Current route: Route {
path: '/example',
stack: [
  Layer {
    handle: [Function (anonymous)],
    name: '<anonymous>',
    params: undefined,
    path: undefined,
    keys: [],
    regexp: /^\/?$/i,
    method: 'get' 
  }
],
methods: { get: true }
}
Is the connection secure? false
Subdomains: []
Is the request an XMLHttpRequest? false


*/
