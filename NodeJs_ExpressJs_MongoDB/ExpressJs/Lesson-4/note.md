# EXPRESS JS

### CORS

```
CORS (Cross-Origin Resource Sharing) middleware is used to enable cross-origin requests in a web application. This is important when you have a client-side application running on a different origin (domain, protocol, or port) from your server-side API. Without CORS, browsers will block such requests due to the Same-Origin Policy.

What CORS Does
CORS allows you to specify which origins are permitted to access resources on your server, along with other request properties such as methods and headers.

Sample CORS Middleware Initialization in Express
Here is a basic example of how to set up CORS middleware in an Express.js application using the cors package.

Step 1: Install the cors package
You need to install the cors package from npm.
```

`npm install cors`
