# EXPRESS JS

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

#### Advantages of using Middleware

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

When you set up a static path using express.static middleware, Express will serve static files (like your index.html) before it processes any other routes. This means that if a file with the requested path exists in the public directory, Express will serve that file instead of calling your route handler.

If you want your app.get("/") route to take precedence over serving static files, you need to reorder your middleware and route handlers. Here’s how you can do it:

Option 1: Serve Static Files but Allow Overriding Specific Routes
Place the app.use(express.static(...)) middleware after defining your routes. This way, your routes will be checked first, and if none of them match, then Express will fall back to serving static files.

```
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Route handler for the home page
app.get("/", (req, res) => {
    res.send(`<h1>Hello user, you're welcome!</h1> <p>Web Development!</p>`);
});

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
```

Option 2: Use a Different Route for the HTML Response
You can use a different route to serve your dynamic content and leave the static file serving as is.

```
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

// Route handler for a different path
app.get("/welcome", (req, res) => {
res.send(`<h1>Hello user, you're welcome!</h1> <p>Web Development!</p>`);
});

app.listen(port, () => {
console.log(`Server running on port ${port}...`);
});
```

#### PARSING

**Parsing in General**

String Parsing: Extracting meaningful data from strings. For example, parsing a date string to extract the day, month, and year.

Data Parsing: Converting data from one format to another, such as parsing JSON or XML data into a usable object in a programming language.

JSON Parsing: Using JSON.parse to convert a JSON string into a JavaScript object.

```
const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Output: Alice
```

URL Parsing: Extracting components from a URL string using the URL constructor.

```
const url = new URL('https://example.com:8080/path?name=Alice#fragment');
console.log(url.hostname); // Output: example.com
console.log(url.port); // Output: 8080
console.log(url.searchParams.get('name')); // Output: Alice
```

In the given example, the path is the part of the URL that comes after the domain and port, and before the query string and fragment. Specifically, the path in the URL 'https://example.com:8080/path?name=Alice#fragment' is /path.

Here’s a breakdown of the URL components:

```
https://example.com:8080/path?name=Alice#fragment
\______/   \_____/ \__/ \__/ \__________/ \_______/
 protocol    domain  port  path   query       fragment
```

Protocol: https
Domain/Hostname: example.com
Port: 8080
Path: /path
Query String: name=Alice
Fragment: fragment

If you use the URL constructor in JavaScript to parse this URL, you can extract and log the path as follows:

const url = new URL('https://example.com:8080/path?name=Alice#fragment');
console.log(url.pathname); // Output: /path

In the above code:

url.pathname will output /path, which is the path of the URL.
url.hostname will output example.com, which is the domain name.
url.port will output 8080, which is the port number.
url.searchParams.get('name') will output Alice, which is the value of the name parameter in the query string.
url.hash will output #fragment, which is the fragment identifier.

```
const url = new URL('https://example.com:8080/login.html?name=Alice&age=30&email=alice@example.com#fragment');

console.log(url.protocol); // Output: 'https:'
console.log(url.hostname); // Output: 'example.com'
console.log(url.port); // Output: '8080'
console.log(url.pathname); // Output: '/login.html'
console.log(url.searchParams.get('name')); // Output: 'Alice'
console.log(url.searchParams.get('age')); // Output: '30'
console.log(url.searchParams.get('email')); // Output: 'alice@example.com'
console.log(url.hash); // Output: '#fragment'

```

Also:
Base URL: https://example.com/login.html
Fragment Identifier: #contact
When a user visits https://example.com/login.html#contact, the browser loads login.html and then jumps to the element with id="contact".

```
<!-- update.html -->
<form id="update-form">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password (ID):</label>
    <input type="password" id="password" name="password" required>
    <label for="msg">Message:</label>
    <textarea id="msg" name="msg" placeholder="Enter your new message..." required></textarea>
    <button type="submit">Update User</button>
</form>

<script>
document.getElementById("update-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg").value;

    fetch("/updateUser", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, msg })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Update Response:", data);
        alert(data.message);
    })
    .catch(error => {
        console.error("Update Error:", error);
        alert("An error occurred. Please try again.");
    });
});
</script>

```

### Serving static files in Express

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:

express.static(root, [options])
The root argument specifies the root directory from which to serve static assets. For more information on the options argument, see express.static.

For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:

app.use(express.static('public'))
Now, you can load the files that are in the public directory:

http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
To use multiple static assets directories, call the express.static middleware function multiple times:

app.use(express.static('public'))
app.use(express.static('files'))
Express looks up the files in the order in which you set the static directories with the express.static middleware function.

```

```
