# EXPRESS JS

### ROUTES

By defining the routes in `page-router.js` and importing it into your main `server.js` file, WE have successfully modularized the route handling.

Here is a summary of your setup:

`server.js`

```
const express = require("express");
const path = require("path");
const pageRouter = require("./config/page-router");

const app = express();
const port = 3005;

// Serve static files from the 'src' directory
app.use(express.static(path.join(\_\_dirname, "src")));

// Route for the home page - http://localhost:3005
app.get("/", (req, res) => {
res.sendFile(path.join(\_\_dirname, "src", "index.html"));
});

// Use the page router for all other page routes
app.use(pageRouter);

// Error handler middleware for 404 Not Found
app.use((req, res, next) => {
res.status(404).sendFile(path.join(\_\_dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});
```

`page-router.js`

```
const express = require("express");
const path = require("path");
const router = express.Router();

// Route for the delete User page - http://localhost:3005/deleteUser
router.get("/deleteUser", (req, res) => {
res.sendFile(path.join(\_\_dirname, "../src/pages/delete.html"));
});

// Route for the login page - http://localhost:3005/login
router.get("/login", (req, res) => {
res.sendFile(path.join(\_\_dirname, "../src/pages/login.html"));
});

// Route for the news page - http://localhost:3005/news
router.get("/news", (req, res) => {
res.sendFile(path.join(\_\_dirname, "../src/pages/news.html"));
});

// Route for the update User page - http://localhost:3005/updateUser
router.get("/updateUser", (req, res) => {
res.sendFile(path.join(\_\_dirname, "../src/pages/update.html"));
});

module.exports = router;
```

#### Key Points:

```
File Paths:

Ensure the paths in page-router.js are correct. They should point to the correct locations of the HTML files relative to where page-router.js is located. If page-router.js is in the config directory, then "../src/pages/... should be correct.

Middleware Order:

The order of middleware in server.js is important. Static file serving, route definitions, and error handling are correctly ordered in this setup.

Modular Routing:

Using app.use(pageRouter); in server.js correctly imports and applies the routes defined in page-router.js.

Error Handling:

The 404 error handling middleware catches any requests that don't match the defined routes and serves the custom 404 page.
```

`express.Router()`
express.Router() is a part of the Express.js framework that allows you to create modular, mountable route handlers.
