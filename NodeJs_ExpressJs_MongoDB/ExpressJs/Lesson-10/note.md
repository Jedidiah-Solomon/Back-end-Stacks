# EXPRESS JS

### Use --watch vs use nodemon to restart server

```
// Get single post | http://localhost:8080/api/posts/1
router.get("/api/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const filteredPosts = posts.filter((post) => post.id === id);

    if (filteredPosts.length > 0) {
        res.status(200).json(filteredPosts[0]);
    } else {
        res.status(404).json({
            message: `A post with id: ${id} was not found. Please try again!`,
        });
    }
});
```

```
// // Repeat with enhancement - http://localhost:8080/api/posts/?limit=2, http://localhost:8080/api/posts/?limit=300
// router.get("/api/posts", (req, res) => {
//     const limit = parseInt(req.query.limit);

//     if (!isNaN(limit) && limit > 0) {
//         if (posts.length >= limit) {
//             res.json(posts.slice(0, limit));
//         } else {
//             res.status(400).json({ message: "Posts not up to limit" });
//         }
//     } else {
//         res.json(posts);
//     }
// });
```

```
// // Get  all posts | http://localhost:8080/api/posts , http://localhost:8080/api/posts/?limit=2
router.get("/api/posts", (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
});
```

```
// Setup Static Route
app.use(express.static(path.join(__dirname, "public")));

// Home Route
// app.get("/", (req, res) => {
//     res.send("Welcome to my page!!!");
// });

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});
// Home Route End
```

### express.json():

This middleware parses incoming requests with JSON payloads. It is based on body-parser and is built into Express.
It allows you to handle requests where the body contains JSON data.
express.urlencoded({ extended: false }):

This middleware parses incoming requests with URL-encoded payloads.
The extended option specifies how the URL-encoded data will be parsed.
false uses the querystring library to parse the URL-encoded data, while true uses the qs library.
It allows you to handle requests where the body is URL-encoded, such as form submissions.

#### Explanation of express.urlencoded({ extended: false })

The express.urlencoded() middleware is used to parse incoming requests with URL-encoded payloads, typically from HTML forms. The extended option controls how the URL-encoded data is parsed.

##### extended: true

When extended: true is used, the qs library is used to parse the URL-encoded data.
The qs library allows for rich objects and arrays to be encoded into the URL-encoded format, using the [] notation.

It can handle nested objects and arrays.

Example of URL-encoded data that can be parsed with extended: true:

`name=John&age=30&address[city]=New+York&address[state]=NY`

##### Parsed object with extended: true:

```
{
  name: 'John',
  age: '30',
  address: {
    city: 'New York',
    state: 'NY'
  }
}
```

#### extended: false

When extended: false is used, the querystring library is used to parse the URL-encoded data.
The querystring library does not support nested objects or arrays.
It is simpler and less powerful than qs.

Example of URL-encoded data that can be parsed with extended: false:

```
name=John&age=30&city=New+York&state=NY
Parsed object with extended: false:
```

```
{
  name: 'John',
  age: '30',
  city: 'New York',
  state: 'NY'
}
```

#### Summary

###### extended: true:

Uses the qs library.
Supports rich objects and arrays.
Can handle nested objects and arrays.

###### extended: false:

Uses the querystring library.
Does not support nested objects or arrays.
Simpler and less powerful parsing.

### When to Use Which Option

Use extended: true if you need to parse complex, nested objects from the URL-encoded data (e.g., complex form submissions).

Use extended: false if you only need to parse simple, flat key-value pairs (e.g., basic form submissions).

In most cases, if you are dealing with forms that have nested structures (like arrays or objects), extended: true is the better choice. If you are dealing with simple forms with flat structures, extended: false is sufficient and simpler.

#### What is qs vs query string

#### qs vs querystring

Both qs and querystring are libraries used to parse and stringify URL-encoded query strings. However, they have different capabilities and use cases.

querystring Library
Built-in: querystring is a built-in module in Node.js.
Simple Parsing: It provides basic functionality to parse and stringify URL-encoded strings.

No Nested Support: It does not support nested objects or arrays.
Example Usage:

`const querystring = require('querystring');`

```
// Parsing
const parsed = querystring.parse('name=John&age=30&city=New+York');
console.log(parsed);
// Output: { name: 'John', age: '30', city: 'New York' }

// Stringifying
const stringified = querystring.stringify({ name: 'John', age: 30, city: 'New York' });
console.log(stringified);
// Output: 'name=John&age=30&city=New+York'
qs Library
```

External Library: qs is an external library that needs to be installed via npm.
Advanced Parsing: It provides advanced functionality to parse and stringify URL-encoded strings.
Nested Support: It supports nested objects and arrays, making it more suitable for complex data structures.

Example Usage:

`const qs = require('qs');`

```
// Parsing
const parsed = qs.parse('name=John&age=30&address[city]=New+York&address[state]=NY');
console.log(parsed);
// Output: { name: 'John', age: '30', address: { city: 'New York', state: 'NY' } }


// Stringifying
const stringified = qs.stringify({ name: 'John', age: 30, address: { city: 'New York', state: 'NY' } });
console.log(stringified);
// Output: 'name=John&age=30&address[city]=New+York&address[state]=NY'
```

##### Comparison

Support for Nested Structures:

querystring: Does not support nested structures.
qs: Supports nested structures like arrays and objects.
Usage:

querystring: Suitable for simple, flat key-value pairs.
qs: Suitable for complex, nested data structures.
Performance:

querystring: Slightly faster for simple parsing/stringifying due to its simplicity.
qs: May have a slight performance overhead due to its advanced features, but it is negligible for most use cases.

#### When to Use Which

Use querystring: When you only need to handle simple key-value pairs and want to avoid external dependencies.
Use qs: When you need to handle complex nested structures in query strings, such as arrays and objects.

Example in Express Middleware
Using querystring (with extended: false):

`app.use(express.urlencoded({ extended: false }));`

Using qs (with extended: true):

`app.use(express.urlencoded({ extended: true }));`

By setting extended: true, Express will use the qs library to parse URL-encoded data, allowing for more complex data structures to be properly handled.

### Create a new post

`http://localhost:8080/api/posts`

```
Body= x-www-form-url-encoded

E.g
title = Love Story
```

or

```
Example Request in Postman
Method: POST
URL: http://localhost:8080/api/posts
Body: x-www-form-urlencoded
title = Love Story 3
author = Paul Okey
```

```
// Create New Post
router.post("/", (req, res) => {
    console.log(req.body); // Log the request body

    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        author: req.body.author,
    };

    if (!newPost.title) {
        return res.status(400).json({ msg: "Please include a title" });
    }

    posts.push(newPost);
    res.status(201).json(posts);
});
```

This makes id unique, title compulsory and author optional.

### REQUEST OBJECT

In Express.js, req.url and req.originalUrl are properties of the request object that provide information about the URL of the incoming request. While they often contain similar information, they can differ in certain scenarios, particularly when dealing with mounted sub-applications or routers. Here's a breakdown of each:

req.url
Definition: The req.url property contains the URL path of the request relative to the route the middleware or router is handling.
Usage: It provides the URL after any router or app prefix has been stripped away.
req.originalUrl
Definition: The req.originalUrl property contains the full URL path of the request as it was received by the Express application, including any router or app prefix.
Usage: It provides the original request URL without any modifications.

```
import express from 'express';
const app = express();
const router = express.Router();

router.get('/info', (req, res) => {
    console.log(`Inside router: req.url = ${req.url}, req.originalUrl = ${req.originalUrl}`);
    res.send('Router Info');
});

app.use('/api', router);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

Request
When you make a request to `http://localhost:3000/api/info`, the console log inside the router handler will output:

`Inside router: req.url = /info, req.originalUrl = /api/info`

Explanation
req.url: The value is /info because it reflects the URL relative to the router's mount point (/api).
req.originalUrl: The value is /api/info because it reflects the full URL as it was received by the Express application.

##### When to Use Which

Use req.url: When you are interested in the URL relative to the router or middleware's context.
Use req.originalUrl: When you need the complete URL path as it was originally received by the application, which is useful for logging or when you need to consider the entire path for certain logic.

When working with the req object in Express.js, there are several key properties that you will frequently use to handle and process incoming requests. Here are the major req object properties that you need to be familiar with:

### Major req Object Properties

`req.app`

Description: This property holds a reference to the Express application that is handling the request.
Usage: `req.app.get('title')`

e.g

```
const express = require("express");
const app = express();
const port = 3000;

// Middleware to set a custom property (app title)
app.use((req, res, next) => {
    req.app.set("title", "My Express App");
    next();
});

// Example route for demonstrating accessing app title
app.get("/app-title", (req, res) => {
    const appTitle = req.app.get("title");
    res.send(`Express app title: ${appTitle}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

`req.baseUrl`

Description: The URL path on which a router instance was mounted.
Usage: Useful when using routers mounted at specific paths.

```
const express = require("express");
const app = express();
const port = 3000;

// Example route for demonstrating req.baseUrl
const router = express.Router();
router.get("/example", (req, res) => {
    console.log("Base URL:", req.baseUrl);
    res.send("Check the console for the Base URL");
});

// Mount the router at /api path
app.use("/api", router);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

`req.body`

Description: Contains key-value pairs of data submitted in the request body (populated by middleware such as body-parser).

Usage: `req.body.name`, `req.body.email`

`req.cookies`

Description: An object containing cookies sent by the client (requires cookie-parser middleware).
Usage: req.cookies.sessionId

req.cookies
Description: req.cookies is an object containing cookies sent by the client (browser) to the server as part of the HTTP request headers. These cookies are typically set by the server and stored on the client side (browser) to maintain session state, user preferences, authentication tokens, etc.

Usage: To access req.cookies, you need to use the cookie-parser middleware in your Express application. This middleware parses the Cookie header and populates req.cookies with key-value pairs of the cookies sent by the client.

`req.fresh / req.stale`

Description: Indicates whether the request is fresh or stale.
Usage: `req.fresh` or `req.stale`

`req.headers`

Description: An object containing the headers sent by the client.
Usage: req.headers['content-type']

`req.hostname`

Description: Contains the hostname derived from the Host HTTP header.
Usage: req.hostname

`req.ip`

Description: The remote IP address of the request.
Usage: `req.ip`

`req.ips`

Description: An array of IP addresses, if the trust proxy setting is enabled.
Usage: `req.ips`

`req.method`

Description: The HTTP method of the request.
Usage: `req.method`

`req.originalUrl`

Description: The original request URL, including the query string.
Usage: `req.originalUrl`

`req.params`

Description: An object containing route parameters.
Usage: `req.params.id`

`req.path`

Description: The URL path of the request.
Usage: `req.path`

`req.protocol`

Description: The request protocol (http or https).
Usage: `req.protocol`

`req.query`

Description: An object containing the query string parameters.
Usage: `req.query.name`

`req.route`

Description: The current route object, containing information about the matched route.
Usage: `req.route`

`req.secure`

Description: A Boolean that is true if a TLS connection is established.
Usage: `req.secure`

`req.signedCookies`

Description: An object containing the signed cookies sent by the client (requires cookie-parser middleware with a secret).
Usage: `req.signedCookies.sessionId`

`req.subdomains`

Description: An array of subdomains in the domain name of the request.
Usage: `req.subdomains`

`req.xhr`

Description: A Boolean that is true if the request was made by an XMLHttpRequest.
Usage: `req.xhr`
