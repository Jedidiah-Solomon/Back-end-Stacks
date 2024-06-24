# EXPRESS JS

EXPRESS JS is fast, unopinionated, minimalist web framework for Node.js. It is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js

##### Site

`https://expressjs.com/`

### Web Applications

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### APIs

With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

### Performance

Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

### Middleware

Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules.

#### Install

`npm install express --save` or `npm install express --no-save`

## SERVERS

#### Server 1

```
const express = require("express");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
    // Set status code explicitly
    res.status(200).send("Welcome to the Home Page");
});

// Handle 404 Not Found
app.use((req, res) => {
    res.status(404).send("404: Page Not Found Our Customer");
});

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});

```

### SERVER 2

```
const express = require("express");
const path = require("path");

const app = express();
const port = 3005;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
or

const express = require("express");
const path = require("path");

const app = express();
const port = 3005;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page - http://localhost:3005
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Route for the login page - http://localhost:3005/login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "login.html"));
});

// Error handler middleware for 404 Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

```

Explanation:
Express Static Middleware: express.static middleware is used to serve static files such as HTML, CSS, and client-side JavaScript files. In this case, it serves files from the src directory.

app.get("/", ...) Route: This defines a route handler for the root path /. When a GET request is made to /, Express will send the index.html file located in the src directory.

res.sendFile(): Sends the specified file (index.html in this case) as the response. path.join(\_\_dirname, "src", "index.html") constructs the absolute path to your index.html file.

Starting the Server: The server listens on port 3005. You can change port to any other available port number.

### SERVER 3

```
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3005;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page - http://localhost:3005
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Route for the login page - http://localhost:3005/login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "login.html"));
});

// Route for the about page - http://localhost:3005/about  using another approach
app.get("/about", (req, res) => {
    // Read about.html file asynchronously
    fs.readFile(
        path.join(__dirname, "src", "pages", "about.html"),
        "utf8",
        (err, data) => {
            if (err) {
                console.error("Error reading about.html:", err);
                res.status(500).send("Internal Server Error");
                return;
            }
            res.send(data); // Send the contents of about.html
        }
    );
});

// Route for the news page - http://localhost:3005/news
app.get("/news", (req, res) => {
    try {
        // Read about.html file synchronously
        const newsPage = fs.readFileSync(
            path.join(__dirname, "src", "pages", "news.html"),
            "utf8"
        );
        res.send(newsPage); // Send the contents of news.html
    } catch (err) {
        console.error("Error reading news.html:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Error handler middleware for 404 Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

#### Scripts

For automatic reload of server on file changes
`Server (npm run server):`
This script uses nodemon to monitor changes in server.js and automatically restarts the server whenever a change is detected. It ensures continuous running of the server during development without manual restarts.

`Server2 (npm run server2):`
This script simply starts the Node.js server using node server.js without the auto-restart functionality provided by nodemon. It's useful for testing the server without the automatic restarts during development.

`Server3 (npm run server3):`
This script utilizes browser-sync to create a proxy server that forwards requests from http://localhost:3000 to http://localhost:3005. It serves static files from the src directory and automatically reloads the browser when changes are made to files in src/\*_/_. This setup facilitates seamless frontend development, allowing immediate updates in the browser upon file modifications.

The basic standard is:

```
"scripts": {
    "Server3": "browser-sync start --server --files 'src/**/*'"
}
```

### SERVER 4

```
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3005;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page - http://localhost:3005
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Route for the login page - http://localhost:3005/login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "login.html"));
});

// Route for the about page - http://localhost:3005/about  using another approach
app.get("/about", (req, res) => {
    // Read about.html file asynchronously
    fs.readFile(
        path.join(__dirname, "src", "pages", "about.html"),
        "utf8",
        (err, data) => {
            if (err) {
                console.error("Error reading about.html:", err);
                res.status(500).send("Internal Server Error");
                return;
            }
            res.send(data); // Send the contents of about.html
        }
    );
});

// Route for the news page - http://localhost:3005/news
app.get("/news", (req, res) => {
    try {
        // Read about.html file synchronously
        const newsPage = fs.readFileSync(
            path.join(__dirname, "src", "pages", "news.html"),
            "utf8"
        );
        res.send(newsPage); // Send the contents of news.html
    } catch (err) {
        console.error("Error reading news.html:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Error handler middleware for 404 Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### Installing Dependencies by adding to package.json before running npm install

```
"dependencies": {
    "body-parser":"*"
}

```

Note: \* means install the latest package

## Middleware

Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. They are the functions that are invoked by the Express.js routing layer.

It is a flexible tool that helps in adding functionalities like logging, authentication, error handling, and more to Express applications.

Middleware in Express.js is a function that has access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware functions can perform a variety of tasks, such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

Middleware function (logger): This middleware function logs "Logging..." to the console every time a request is made to the server.
Middleware usage (app.use(logger)): The app.use method registers the logger middleware with the Express application. This means that for every incoming request, the logger middleware will be executed before any route handlers are executed.
Next function (next()): The next function is crucial as it passes control to the next middleware function in the stack. If next is not called, the request-response cycle will be terminated prematurely, and the subsequent middleware and route handlers will not be executed.

Importance of Order
The order in which middleware is defined using app.use or directly in routes is critical. Middleware should be defined before the routes that depend on them. In this example, the logger middleware is defined before the root route handler to ensure that every request is logged before the response is sent.

Middleware Syntax
The basic syntax for the middleware functions is:

```
app.get(path, (req, res, next) => {}, (req, res) => {})
```

Middleware Syntax
The basic syntax for the middleware functions is:

app.get(path, (req, res, next) => {}, (req, res) => {})

Advantages of using Middleware
Middleware can process request objects multiple times before the server works for that request.
Middleware can be used to add logging and authentication functionality.
Middleware improves client-side rendering performance.
Middleware is used for setting some specific HTTP headers.
Middleware helps with Optimization and better performance.

### The body-parser middleware

This is a piece of middleware that allows you to parse incoming request bodies in a middleware before your handlers, available under the req.body property. It is commonly used in Express.js applications to handle POST request data. Here’s an explanation of the provided code:

```
// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```

##### Explanation

`app.use(bodyParser.json())`

This middleware function parses incoming requests with JSON payloads.
When a request with a Content-Type of application/json is received, this middleware parses the JSON payload and makes it available on req.body.
Example:

```
{
"name": "John Doe",
"email": "john.doe@example.com"
}
```

If this JSON data is sent in the body of a POST request, bodyParser.json() will parse it, and you can access the data in your route handler using req.body.name and req.body.email.

`app.use(bodyParser.urlencoded({ extended: false }))`

This middleware function parses incoming requests with URL-encoded payloads (such as form submissions).
The extended option determines the parsing library to use:
When extended: false, it uses the querystring library to parse the URL-encoded data, which can handle simple objects.
When extended: true, it uses the qs library, which allows for parsing of rich objects and arrays.
Example:

```
<form action="/submit" method="POST">
  <input type="text" name="name" value="John Doe">
  <input type="email" name="email" value="john.doe@example.com">
  <button type="submit">Submit</button>
</form>
```

When this form is submitted, bodyParser.urlencoded({ extended: false }) will parse the form data and make it available on req.body. You can then access the data in your route handler using req.body.name and req.body.email.

##### Usage Example

Here’s a complete example demonstrating the use of body-parser middleware in an Express.js application:

```
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route to handle JSON data
app.post("/json-data", (req, res) => {
console.log(req.body); // { name: 'John Doe', email: 'john.doe@example.com' }
res.send("JSON data received");
});

// Route to handle URL-encoded data
app.post("/form-data", (req, res) => {
console.log(req.body); // { name: 'John Doe', email: 'john.doe@example.com' }
res.send("Form data received");
});

app.listen(port, () => {
console.log(`Server running on port ${port}...`);
});
```
