# Node js

Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.

## Why Node.js?

Node.js uses asynchronous programming!

A common task for a web server can be to open a file on the server and return the content to the client.

##### Here is how PHP or ASP handles a file request:

Sends the task to the computer's file system.
Waits while the file system opens and reads the file.
Returns the content to the client.
Ready to handle the next request.

##### Here is how Node.js handles a file request:

Sends the task to the computer's file system.
Ready to handle the next request.
When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

## What Can Node.js Do?

Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database
What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"

## Express.js

Express.js, also called "Express," is a minimalist, fast Node.js backend framework. The software is open-source and is released under the MIT license.

Here are some steps and concepts you can focus on to dive deeper into Express.js:

Routing: Learn how to set up routes in Express to handle different HTTP methods (GET, POST, PUT, DELETE) and URL paths.
Middleware: Understand how middleware functions work in Express and how they can be used for tasks like logging, error handling, authentication, and more.
Working with Requests and Responses: Learn how to handle request parameters, query strings, request bodies, and headers. Explore different ways to send responses back to clients.
Database Integration: Explore using databases like MongoDB, MySQL, or PostgreSQL with Express.js. Learn about ORMs (Object-Relational Mapping) like Mongoose (for MongoDB) or Sequelize (for SQL databases).
Authentication and Authorization: Implement user authentication and authorization using packages like Passport.js or JSON Web Tokens (JWT) in Express.
Error Handling: Implement error handling middleware to gracefully manage errors in your application.
API Development: Focus on creating RESTful APIs with Express.js to serve data to client-side applications.
Security: Learn about security best practices in Express.js, such as sanitizing inputs, preventing XSS (Cross-Site Scripting) attacks, and implementing CORS (Cross-Origin Resource Sharing).
Testing: Explore testing frameworks like Mocha, Chai, or Jest to write unit tests for your Express.js applications.
Deployment: Learn how to deploy your Express.js applications to platforms like Heroku, AWS, or DigitalOcean.

### NPM

1. `npm install express` for a particular project or `npm install -g express` globally. Update npm itself `npm install -g npm@latest`npm
2. In Node.js some modules are in-built like http while others need you to install them e.g expressjs

## Package.json

Node file to keep records.

1. **nodemon** `Nodemon helps you develop Node.js applications by automatically restarting your Node application whenever it detects file changes in the project directory.
You don’t need to manually stop and restart your app during development; Nodemon handles it for you.` E.g ``nodemon app6` will run app6 and restart server on any change.

2. **browser sync** `BrowserSync allows you to test your website in real time by synchronizing interactions, URLs, and code changes across multiple devices and browsers.Whenever you make changes to your code or files, BrowserSync automatically reloads the browser to reflect those changes immediately.Live Reload: Whenever you save changes to your HTML, CSS, JavaScript, or other files, BrowserSync automatically reloads the connected browsers.`

`browser-sync start --server --port 3500 --port 4000 app6.js` will start the server too

3. `npm install open`

```
The start.js script is designed to start your Node.js server using nodemon and automatically open the default web browser to the server's URL. It achieves this using Node.js's child_process module to execute commands and the open package to open URLs in the default browser.

exec is a function from Node.js's child_process module that allows you to run shell commands.
open is a package that can open files, URLs, and executables in the default application associated with the file type.

exec("npx nodemon app_6.js") runs the command npx nodemon app_6.js in the shell.
nodemon is a utility that monitors for any changes in your source and automatically restarts your server.
npx is a package runner tool that comes with Node.js and is used here to run nodemon without globally installing it.

setTimeout is used to delay the execution of the function inside it by 3000 milliseconds (3 seconds).
After the delay, open("http://127.0.0.1:3501") opens the URL http://127.0.0.1:3501 in the default web browser.
The delay is to ensure that the server has enough time to start before the browser tries to connect to it. You can adjust the delay based on how long it takes for your server to start.

Forward Output from the Server to the Console:

server.stdout.pipe(process.stdout) forwards the standard output (stdout) from the nodemon process to the current process's standard output. This means that any output from nodemon (like logs) will be displayed in the console.
server.stderr.pipe(process.stderr) forwards the standard error (stderr) from the nodemon process to the current process's standard error. This means that any error messages from nodemon will be displayed in the console.
```

```
"start1": "nodemon app_5.js",        --this open the http server on the terminal, you just copy the url to browser e.g localhost:3000

"start2": "node start.js", this created a start.js which uses exec and open

"serve1": "browser-sync start --config bs-config.js" //this ensures the server running is proxified, then takes note of changes

```
