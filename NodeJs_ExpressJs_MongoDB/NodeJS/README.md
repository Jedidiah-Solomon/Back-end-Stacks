### What is a Module in Node.js?

Consider modules to be the same as JavaScript libraries.

A set of functions you want to include in your application.

#### Built-in Modules

Node.js has a set of built-in modules which you can use without any further installation.

#### Include Modules

To include a module, use the require() function with the name of the module:

`const http = require('http');`

##### Now your application has access to the HTTP module, and is able to create a server:

```
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

```
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World</h1>");
}).listen(3500, "127.0.0.1", () => {
    console.log("Server running at http://127.0.0.1:3500/");
});
```

```
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World</h1>");
}).listen(3500, "localhost", () => {
    console.log("Server running at http://localhost:3500/");
});
```

###### Use 0.0.0.0 for all host

```
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World</h1>");
}).listen(3500, "0.0.0.0", () => {
    console.log("Server running at http://localhost:3500/");
    console.log("Server running at http://127.0.0.1:3500/");
});
```

const http = require("http");
const dNow = require("./myfirstmodule");

http.createServer((req, res) => {
res.writeHead(200, { "Content-Type": "text/html" });
res.write("<h1>Hello World</h1>"); // Display the <h1> element first
res.end(`The date and time are currently: ${dNow.myDateModule()}`);
}).listen(3500, "0.0.0.0", () => {
console.log("Server running at http://localhost:3500/");
console.log("Server running at http://127.0.0.1:3500/");
});

```
res.write(data):
The res.write() method is used to send data (such as HTML content, text, or binary data) to the client (the web browser or any other HTTP client).
You can call res.write() multiple times to send chunks of data incrementally.
It does not end the response; you can continue writing more data after calling it.
res.end([data]):
The res.end() method is used to finish the response and send it to the client.
If you provide an optional data parameter, it will be sent as the last chunk of data before closing the connection.
After calling res.end(), no more data can be sent in the response.
```

##### res.writeHead()

The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

The response.writeHead() method in Node.js is used to send a response header to the incoming HTTP request. Let’s break down its usage:

### Purpose:

`response.writeHead(statusCode[, statusMessage][, headers])` sets the response status code and headers for the HTTP response.

The statusCode represents a 3-digit HTTP status code (e.g., 200 for success, 404 for not found).

The headers parameter contains additional response headers (such as content type, cookies, etc.).

#### Parameters:

statusCode (number): The HTTP status code (e.g., 200, 404, 500).

statusMessage (optional string): A human-readable status message (e.g., “OK” for status code 200).

headers (optional object): Additional headers to include in the response.

Example 1:

```
const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(200, 'Custom OK', {
'Content-Type': 'text/plain',
'Custom-Header': 'Hello'
});
res.end('Hello World');
});

server.listen(3000, () => {
console.log('Server running on port 3000');
});
```

```
const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(200, {
'Content-Type': 'text/plain',
'Custom-Header': 'Hello',
'School-API-Key': 'your-secret-key'
});
res.end('Hello World');
});

server.listen(3000, () => {
console.log('Server running on port 3000');
});
```

In this example, we set the status code to 200 (OK) and include a custom header called “Custom-Header.” and another cutom header School-API-Key

Example 2:

```
const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(404, 'Not Found', {
'Content-Type': 'text/html'
});
res.end('<h1>Page Not Found</h1>');
});

server.listen(3000, () => {
console.log('Server running on port 3000');
});
```

Here, we set the status code to 404 (Not Found) and provide a custom status message.
Remember that response.writeHead() should be called before any data is sent to the client. It sets the initial response header, and subsequent calls to response.setHeader() will merge with the headers set by response.writeHead()

HTTP Headers:
HTTP headers are metadata included in an HTTP response (or request).
They provide additional information about the response, such as content type, caching instructions, cookies, and more.
Headers are key-value pairs, where the key represents the header name (e.g., 'Content-Type', 'Custom-Header') and the value represents the header’s value.

Read the Query String
The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object). Use `res.write(req.url);` to see it

#### Create Your Own Modules

You can create your own modules, and easily include them in your applications.Use the exports keyword to make properties and methods available outside the module file.

### URL MODULE

The url module in Node.js provides utilities for URL resolution and parsing. It is used to work with URLs, allowing you to parse, format, resolve, and manipulate URL strings.

Here are some common uses of the url module:

#### Parsing URLs:

You can parse a URL string into its individual components such as protocol, host, pathname, query string, etc.

#### Formatting URLs:

You can format a URL object back into a URL string.

#### Resolving URLs:

You can resolve target URLs relative to a base URL.

#### URL Object:

You can work with URL objects to handle URLs more effectively in your application.

Example Usage
Here's a basic example to demonstrate the use of the url module:

```
const url = require('url');

// Parse a URL string into an object
const myURL = new URL('http://www.example.com:8080/path/name?query=string#hash');

console.log(myURL.href); // 'http://www.example.com:8080/path/name?query=string#hash'
console.log(myURL.protocol); // 'http:'
console.log(myURL.host); // 'www.example.com:8080'
console.log(myURL.hostname); // 'www.example.com'
console.log(myURL.port); // '8080'
console.log(myURL.pathname); // '/path/name'
console.log(myURL.search); // '?query=string'
console.log(myURL.hash); // '#hash'


// Format a URL object back into a URL string
const formattedURL = url.format(myURL);
console.log(formattedURL); // 'http://www.example.com:8080/path/name?query=string#hash'

// Resolve a target URL relative to a base URL
const baseURL = 'http://www.example.com/';
const targetURL = '/path/name';
const resolvedURL = url.resolve(baseURL, targetURL);
console.log(resolvedURL); // 'http://www.example.com/path/name'
```

### Detailed Description of the Methods and Properties

Parsing URLs:

new URL(urlString[, base]): Creates a new URL object by parsing the input urlString. An optional base can be provided to resolve relative URLs.
URL Properties:

```
.href: The full URL string.
.protocol: The protocol scheme (e.g., 'http:', 'https:').
.host: The full host (hostname with port, if specified).
.hostname: The hostname.
.port: The port number.
.pathname: The path segment of the URL.
.search: The query string, including the leading ?.
.hash: The fragment identifier, including the leading #.
```

#### Formatting URLs:

url.format(urlObject): Takes a URL object and returns a formatted URL string.

#### Resolving URLs:

url.resolve(from, to): Resolves a target URL relative to a base URL.
The url module is very useful when working with web applications and handling URL manipulation tasks in Node.js.

new URL(req.url, http://${req.headers.host}):

The URL constructor takes two arguments: the first is the path (or a relative URL), and the second is the base URL. The base URL provides the protocol (http://), hostname, and port. Combining these gives a full URL for accurate parsing.
By combining req.url with http://${req.headers.host}, you create a full URL string that can be accurately parsed by the URL constructor.
Using new URL(req.url, http://${req.headers.host}):

new URL('/about?name=John', 'http://localhost:3000') creates a full URL http://localhost:3000/about?name=John.

### Node.js as a File Server

The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:

var fs = require('fs');
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files

```
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```

Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

```
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

Example
Create a new, empty file using the open() method:

```
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

The fs.open method in Node.js is used to open a file and get a file descriptor. The method signature for fs.open looks like this:

js
Copy code
fs.open(path, flags[, mode], callback)
path: The path to the file you want to open.
flags: The file system flags to control how the file is opened (e.g., "r" for reading, "w" for writing).
mode: (Optional) The file mode (permission and sticky bits) to set if the file is created. Default: 0o666 (readable and writable).
callback: A function that is called when the operation completes, with two arguments: (err, fd) where fd is the file descriptor.
The example you provided appears to be an incorrect use of fs.open. You cannot directly write content with fs.open; instead, you should use fs.writeFile or fs.write after opening the file.

What is a File Descriptor (fd)?
A file descriptor (fd) is a low-level reference to an open file provided by the operating system. It's a non-negative integer that uniquely identifies an open file within a process. When you open a file using fs.open, you get a file descriptor which you can use to perform various operations (like reading, writing, closing) on that file.

Basic Workflow with File Descriptors
Open the File: Get the file descriptor.
Use the File Descriptor: Perform read/write operations using the file descriptor.
Close the File: Release the file descriptor.
Example Using File Descriptors
Here’s a step-by-step example:

Open the File:

Use fs.open to open the file and get a file descriptor.
Write to the File:

Use fs.write to write data to the file using the file descriptor.
Close the File:

Use fs.close to close the file and release the file descriptor.

Update Files
The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()

In Node.js, fs.readFile is used to asynchronously read the contents of a file. Here’s a breakdown of its usage:

Syntax
javascript
Copy code
fs.readFile(path[, options], callback)
path: The file path or file descriptor of the file to be read.
options: Optional. Can specify encoding (like 'utf8' for text files), flag (like 'r' for reading), and other options.
callback: A callback function that is called once the file is completely read or an error occurs. It has two parameters:
err: An error object. It is null if the operation was successful.
data: The contents of the file as a string (if encoding is specified) or a buffer (if encoding is not specified).

Delete Files
To delete a file with the File System module, use the fs.unlink() method.

The fs.unlink() method deletes the specified file:

Example
Delete "mynewfile2.txt":

var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
if (err) throw err;
console.log('File deleted!');
});

Rename Files
To rename a file with the File System module, use the fs.rename() method.

The fs.rename() method renames the specified file:

Example
Rename "mynewfile1.txt" to "myrenamedfile.txt":

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
if (err) throw err;
console.log('File Renamed!');
});

Events in Node.js
Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

ExampleGet your own Node.js Server
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
console.log('The file is open');
});

Understanding fs.createReadStream()
In Node.js, fs.createReadStream() is used to create a readable stream from a file. Streams are a fundamental concept in Node.js that allow you to read or write data continuously, piece by piece, rather than loading the entire file into memory at once. This is particularly useful for handling large files or when you want to process data incrementally.

Syntax
The basic syntax for fs.createReadStream() is as follows:

javascript
Copy code
const fs = require('fs');

const readableStream = fs.createReadStream(path[, options]);
path: Specifies the path to the file you want to read.
options: Optional object that can specify additional options like encoding, highWaterMark (buffer size), etc.
Example Usage
Let's illustrate with an example using fs.createReadStream():

```
const fs = require('fs');

// Specify the path to the file
const filePath = './src/files/file3.txt';

// Create a readable stream from file3.txt
const readableStream = fs.createReadStream(filePath);

// Event listener for 'data' event
readableStream.on('data', (chunk) => {
console.log(`Received ${chunk.length} bytes of data.`);
});

// Event listener for 'end' event
readableStream.on('end', () => {
console.log('Reading file finished.');
});

// Event listener for 'error' event
readableStream.on('error', (err) => {
console.error('Error reading file:', err);
});
```

Explanation
File Path: Specify the path to the file you want to read (filePath in the example).

Creating Readable Stream:

const readableStream = fs.createReadStream(filePath);
This creates a readable stream (readableStream) from file3.txt located at filePath.

Listening to Events:

data Event: Fires when a chunk of data is read from the file. The callback function receives a chunk of data as a buffer.
end Event: Fires when the entire file has been read.
error Event: Fires if there is an error reading the file.
Reading Data: As data becomes available (in chunks), the 'data' event is emitted. You can process each chunk of data as it arrives.

Handling Errors: It's crucial to handle errors ('error' event) to manage situations such as file not found, permission issues, or other I/O errors.

Benefits of Using Streams
Efficiency: Streams allow for efficient memory usage because they handle data in chunks rather than loading the entire file into memory.

Scalability: Streams are scalable for handling large files or handling multiple concurrent requests.

Non-blocking: Streams are non-blocking, meaning other operations can proceed concurrently while data is being read from or written to a file.

Conclusion
fs.createReadStream() is a powerful feature in Node.js for handling file I/O operations efficiently. It enables you to work with large files and manage data streams seamlessly. Understanding how to use streams effectively can greatly enhance the performance and scalability of your Node.js applications, especially in scenarios involving file handling and data processing.

Explanation:
fs.createReadStream(filePath): Creates a readable stream (readableStream) from the file specified by filePath.
'data' Event: Fires whenever data is read from the file. The chunk parameter contains a chunk of data as a Buffer.
'end' Event: Fires when the entire file has been read.
'error' Event: Fires if there is an error reading the file.

fs.createReadStream("./src/files/file6.txt", { options }): Creates a readable stream (reader) with specified options.

Options:

flag: Specifies the file system flag. Here, "a+" means open the file for reading and appending.
encoding: Specifies the encoding of the file data (UTF-8 in this case).
start: Indicates the byte offset to start reading from (5 bytes from the beginning of the file).
end: Indicates the byte offset to stop reading (64 bytes from the beginning of the file).
highWaterMark: Specifies the size of the internal buffer in bytes for reading data (default is 64 \* 1024 bytes or 64 KB).
'data' Event: Handles incoming chunks of data. The chunk parameter represents the data read from the file.

Summary of Flags
"a+": Open file for reading and appending. If it doesn't exist, create it.

Pros: Allows both reading and appending. Creates the file if it doesn't exist.
Cons: Cannot exclusively create a new file (if it exists, it appends to it).
"x+": Open file for reading and writing. Fail if the file already exists.

Pros: Ensures the file is created exclusively. Useful for creating new files without overwriting existing ones.
Cons: Fails if the file already exists.
Summary of Stream Events
data: Triggered when a chunk of data is available to be read.
end: Triggered when there is no more data to be read from the stream.
error: Triggered when an error occurs during the reading process.

#### EventEmitter

n Node.js, the EventEmitter class is a core module that allows you to create, manage, and listen to custom events. It is part of the events module, and many core Node.js modules are built around EventEmitter to provide an asynchronous event-driven architecture.

Basic Usage of EventEmitter
Importing and Creating an EventEmitter Instance
To use EventEmitter, you need to import the events module and create an instance of EventEmitter.

```
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();
// Define an event 'eventName'
myEmitter.on('eventName', () => {
    console.log('An event occurred!');
});

// Emit the 'eventName' event
myEmitter.emit('eventName');

// Define an event 'eventWithArgs'
myEmitter.on('eventWithArgs', (arg1, arg2) => {
    console.log(`Event with arguments: ${arg1}, ${arg2}`);
});

// Emit the 'eventWithArgs' event with arguments
myEmitter.emit('eventWithArgs', 'arg1', 'arg2');

```

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Define an event 'greet'
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'World'); // Output: Hello, World!
```

EventEmitter Methods
on(eventName, listener): Registers a listener for the specified event.
emit(eventName, ...args): Emits the specified event, passing the provided arguments to the event listener.
once(eventName, listener): Registers a one-time listener for the specified event. The listener is invoked only the first time the event is emitted.
removeListener(eventName, listener): Removes the specified listener from the event.
removeAllListeners([eventName]): Removes all listeners, or those of the specified event.

```
const fs = require('fs');
const EventEmitter = require('events');

class FileEmitter extends EventEmitter {}

const fileEmitter = new FileEmitter();

// Define a 'fileRead' event
fileEmitter.on('fileRead', (content) => {
    console.log('File content:', content);
});

// Define an 'error' event
fileEmitter.on('error', (err) => {
    console.error('Error reading file:', err);
});

// Read the file and emit the appropriate event
fs.readFile('./src/files/file3.txt', 'utf8', (err, data) => {
    if (err) {
        fileEmitter.emit('error', err);
    } else {
        fileEmitter.emit('fileRead', data);
    }
});
```

#### Node.js Upload Files --The Formidable Module

`npm install formidable`

Explanation

#### HTML Form:

```
<!DOCTYPE html>
<html>
    <head>
        <title>File Upload</title>
    </head>
    <body>
        <h2>Upload File</h2>
        <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="fileToUpload" /><br /><br />
            <input type="submit" value="Upload File" />
        </form>
    </body>
</html>
```

The form uses enctype="multipart/form-data" to handle file uploads.
The form action is set to /upload, which is handled by the Node.js server.

#### Node.js Server:

```
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
http.createServer((req, res) => {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // Parse the uploaded file
        const form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, 'uploads'); // Set upload directory
        form.keepExtensions = true; // Keep file extension

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return console.error('Error parsing the form:', err);
            }

            // Get the uploaded file details
            const oldPath = files.fileToUpload.filepath;
            const newPath = path.join(form.uploadDir, files.fileToUpload.originalFilename);

            // Move the file to the desired location
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return console.error('Error moving the file:', err);
                }

                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File uploaded and moved successfully!');
                res.end();
            });
        });
    } else if (req.url == '/') {
        // Serve the HTML form
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return console.error('Error reading the HTML file:', err);
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
```

The server listens for POST requests at /upload.
formidable.IncomingForm() is used to parse the incoming form data.
form.uploadDir specifies the directory where uploaded files will be temporarily stored.
form.keepExtensions ensures that the uploaded file retains its original extension.
After parsing the form, the file is moved to the desired location using fs.rename.
File Handling:

The uploaded file is initially saved to a temporary location.
The file is then moved to the final destination (uploads directory).

Running the Server
Create the uploads Directory:
Ensure there is an uploads directory in the same directory as server.js to store the uploaded files:
`mkdir uploads`

Start the Server:
Start the Node.js server by running:
`node server.js`

Upload a File:
Open a web browser and navigate to http://127.0.0.1:3000/. Use the form to upload a file.

const form = new formidable.IncomingForm();: Creates a new instance of IncomingForm from the formidable module.
form.uploadDir = path.join(**dirname, 'uploads');: Sets the directory where the uploaded files will be temporarily stored. **dirname refers to the directory of the current script, and uploads is the subdirectory where files will be stored.
form.keepExtensions = true;: Ensures that the uploaded files retain their original file extensions.

form.parse(req, (err, fields, files) => { ... });: Parses the incoming request (req) and provides the parsed fields and files in the callback function.
if (err) { ... }: Checks for errors during parsing. If an error occurs, it responds with a 500 status code and logs the error.

const oldPath = files.fileToUpload.filepath;: Retrieves the temporary file path of the uploaded file from the files object.
const newPath = path.join(form.uploadDir, files.fileToUpload.originalFilename);: Constructs the new file path where the file will be moved, using the original file name.

fs.rename(oldPath, newPath, (err) => { ... });: Moves the file from oldPath (temporary location) to newPath (final destination).
if (err) { ... }: Checks for errors during the file move operation. If an error occurs, it responds with a 500 status code and logs the error.
res.writeHead(200, { 'Content-Type': 'text/plain' });: Sets the response header to indicate a successful response.
res.write('File uploaded and moved successfully!');: Writes a success message to the response.
res.end();: Ends the response

files.fileToUpload: Accesses the uploaded file object, which contains various properties and metadata about the uploaded file.
filepath: A property of the fileToUpload object that holds the path to the file in its temporary location on the server. This is where formidable stores the uploaded file before it is moved to the desired location.
path.join(form.uploadDir, files.fileToUpload.originalFilename): Constructs a new file path by combining the upload directory (form.uploadDir) with the original file name of the uploaded file.
form.uploadDir: Refers to the directory where you want to permanently store the uploaded file. This was set earlier in the code as path.join(\_\_dirname, 'uploads').
files.fileToUpload.originalFilename: A property of the fileToUpload object that holds the original name of the uploaded file as it was on the client's system. Keeping the original filename helps in identifying the file easily.
Summary
oldPath: The path to the temporary location where formidable initially stores the uploaded file.
newPath: The path to the final location where you want to move and store the uploaded file, constructed by combining the upload directory and the original filename.

###### Temporary Storage Location

const oldPath = files.fileToUpload.filepath;
Explanation: The temporary storage location is determined by formidable. By default, formidable saves the uploaded files to a temporary directory managed by the operating system (such as /tmp on Unix systems or C:\Users\{username}\AppData\Local\Temp on Windows).
File Path: files.fileToUpload.filepath provides the path to this temporary location. This is not within your application's directory structure but rather in a system-managed temporary directory.

##### Permanent Storage Location

const newPath = path.join(form.uploadDir, files.fileToUpload.originalFilename);
Explanation: The permanent storage location is specified by form.uploadDir, which you set to a directory within your application (e.g., uploads). The file is moved from the temporary location to this permanent directory.
File Path: newPath combines the form.uploadDir (which is set to the uploads directory) and the original filename of the uploaded file to form the new path.

### The Nodemailer Module

The Nodemailer module makes it easy to send emails from your computer.

Send an Email
Now you are rey to send emails from your server.

Use the username and password from your selected email provider to send an email.

## MySQL

-------------------------------====
MySQL Installation on Windows
https://dev.mysql.com/downloads/installer/

Select mysql-installer-web-community-8.0.23.msi if you have good internet connection, otherwise choose mysql-installer-community-8.0.23.msi.

Install MySQL
After downloading, unzip it, and double click the MSI installer .exe file.

Then follow the steps below:

1. "Choosing a Setup Type" screen: Choose "Full" setup type. This installs all MySQL products and features. Then click the "Next" button to continue.

2. "Check Requirements" screen: The installer checks if your pc has the requirements needed. If there is some failing requirements, click on each item to try to resolve them by clicking on the Execute button that will install all requirements automatically. Click "Next".

3. "Installation" screen: See what products that will be installed. Click "Execute" to download and install the Products. After finishing the installation, click "Next".

4. "Product Configuration" screen: See what products that will be configured. Click the "MySQL Server 8.0.23" option to configure the MySQL Server. Click the "Next" button. Choose the "Standalone MySQL Server/Classic MySQL Replication" option and click on the "Next" button. In page "Type and Networking" set Config Type to "Development Computer" and "Connectivity" to "TCP/IP" and "Port" to "3006". Then, click the "Next" button.

5. "Authentication Method" screen: Choose "Use Strong Password Encryption for Authentication". Click "Next".

6. "Accounts and Roles" screen: Set a password for the root account. Click "Next".

7. "Windows Service" screen: Here, you configure the Windows Service to start the server. Keep the default setup, then click "Next".

8. "Apply Configuration" screen: Click the "Execute" button to apply the Server configuration. After finishing, click the "Finish" button.

9. "Product Configuration" screen: See that the Product Configuration is completed. Keep the default setting and click on the "Next" and "Finish" button to complete the MySQL package installation.

10. In the next screen, you can choose to configure the Router. Click on "Next", "Finish" and then click the "Next" button.

11. "Connect To Server" screen: Type in the root password (from step 6). Click the "Check" button to check if the connection is successful or not. Click on the "Next" button.

12. "Apply Configuration" screen: Select the options and click the "Execute" button. After finishing, click the "Finish" button.

13. "Installation Complete" screen: The installation is complete. Click the "Finish" button.

Verify MySQL Installation
Open the MySQL Command Line Client from cmd.

You should see a mysql> prompt. If you have set any password, write your password here.

Now, you are connected to the MySQL server, and you can execute all the SQL command at mysql> prompt.

`npm install mysql`

#### Add Environmental Variable

`"C:\Program Files\MySQL\MySQL Server 8.0\bin"`

`mysql -u root -p` then enter password

##### Change Authentication Method

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your password';
FLUSH PRIVILEGES;
```

To verify the MySQL installation and to see the databases and tables, you can use MySQL Workbench or the MySQL Command Line Client.

Using MySQL Command Line Client:

Open the MySQL Command Line Client:

`mysql -u root -p`

Enter your password when prompted.

Show Databases:

`SHOW DATABASES;`

Select a Database:

`USE your_database_name;`

Show Tables:

`SHOW TABLES;`

```
CREATE TABLE employee_demographics (
  employee_id INT NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  age INT,
  gender VARCHAR(10),
  birth_date DATE,
  PRIMARY KEY (employee_id)
);

CREATE TABLE employee_salary (
  employee_id INT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  occupation VARCHAR(50),
  salary INT,
  dept_id INT,
  FOREIGN KEY (employee_id) REFERENCES employee_demographics(employee_id)
);
```

CREATE TABLE employee_demographics
This command creates a table named employee_demographics with the following columns:

employee_id:

Type: INT
Constraint: NOT NULL (cannot be null)
Acts as the primary key for the table.
first_name:

Type: VARCHAR(50) (a variable-length string up to 50 characters)
last_name:

Type: VARCHAR(50) (a variable-length string up to 50 characters)
age:

Type: INT
gender:

Type: VARCHAR(10) (a variable-length string up to 10 characters)
birth_date:

Type: DATE
PRIMARY KEY (employee_id):

The employee_id column is set as the primary key, which means it uniquely identifies each record in the table.

CREATE TABLE employee_demographics (
employee_id INT NOT NULL,
first_name VARCHAR(50),
last_name VARCHAR(50),
age INT,
gender VARCHAR(10),
birth_date DATE,
PRIMARY KEY (employee_id)
);

CREATE TABLE employee_salary
This command creates a table named employee_salary with the following columns:

employee_id:

Type: INT
Constraint: NOT NULL (cannot be null)
It will be used to link to the employee_demographics table.
first_name:

Type: VARCHAR(50) (a variable-length string up to 50 characters)
Constraint: NOT NULL (cannot be null)
last_name:

Type: VARCHAR(50) (a variable-length string up to 50 characters)
Constraint: NOT NULL (cannot be null)
occupation:

Type: VARCHAR(50) (a variable-length string up to 50 characters)
salary:

Type: INT
dept_id:

Type: INT
FOREIGN KEY (employee_id) REFERENCES employee_demographics(employee_id):

The employee_id column is a foreign key that references the employee_id column in the employee_demographics table. This creates a relationship between the two tables.

CREATE TABLE employee_salary (
employee_id INT NOT NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
occupation VARCHAR(50),
salary INT,
dept_id INT,
FOREIGN KEY (employee_id) REFERENCES employee_demographics(employee_id)
);

Purpose of These Tables

employee_demographics: Stores basic demographic information about employees, such as their ID, name, age, gender, and birth date.
employee_salary: Stores salary-related information about employees, such as their occupation, salary, and department ID, along with the employee ID which links to the demographic data.

Relationship Between Tables
The relationship is established through the employee_id column. The employee_id in the employee_salary table is a foreign key that references the employee_id in the employee_demographics table. This means that each entry in the employee_salary table corresponds to an entry in the employee_demographics table, ensuring data integrity and allowing for complex queries that combine information from both tables.

================

Connecting to MySQL Server
Open MySQL Shell:

Open your terminal or command prompt.
Launch MySQL Shell by typing `mysqlsh` and pressing Enter.
Connect to MySQL Server:

Once MySQL Shell starts, you need to connect to your MySQL server. Use the following command:
`\connect -u your_username -h your_host -p` e.g `\connect -u root -h localhost -p`

Select Database:

Once connected, you can select the database you want to work with:

`\use database_name;` e.g `\use bathphage_ict_center;`
This command switches the MySQL shell context to the specified database.

List Tables:
To list all tables in the current database (bathphage_ict_center):
`\sql SHOW TABLES;`

Search for student_class_info:
`\sql SHOW TABLES LIKE 'student_class_info';`

To select all rows from the student_class_info table, you can use the following command:
`SELECT * FROM student_class_info;` or `\sql SELECT * FROM student_class_info;`

To disconnect from the current session, use \disconnect. For example:

`\disconnect`

Note: After connection, you can connect your server

-- SELECT sci.id, sci.student_id, sb.first_name, sb.last_name, sci.email, sci.teacher, sci.learning_type
-- FROM student_class_info sci
-- JOIN student_biodata sb ON sci.student_id = sb.student_id;

MySQL localhost:33060+ ssl bathphage_ict_center JS > `\sql SHOW VARIABLES LIKE 'datadir';`
Fetching global names, object names from `bathphage_ict_center` for auto-completion... Press ^C to stop.
+---------------+---------------------------------------------+
| Variable_name | Value |
+---------------+---------------------------------------------+
| datadir | C:\ProgramData\MySQL\MySQL Server 8.0\Data\ |
+---------------+---------------------------------------------+
1 row in set (0.0020 sec)
MySQL localhost:33060+ ssl bathphage_ict_center JS >

MySQL localhost:33060+ ssl bathphage_ict_center JS > `\sql SHOW VARIABLES LIKE 'secure_file_priv';`
+------------------+------------------------------------------------+
| Variable_name | Value |
+------------------+------------------------------------------------+
| secure_file_priv | C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\ |
+------------------+------------------------------------------------+
1 row in set (0.0021 sec)

Here’s how you might set secure_file_priv in your my.cnf or my.ini:

# Empty string allows loading files from any directory

`secure_file_priv = ""`

# Enable local infile support

`local_infile=1`

After making changes to the configuration file, save it and restart MySQL for the changes to take effect. This should resolve the issue you encountered with LOAD DATA INFILE due to the --secure-file-priv restriction.

#### The Result Object

When executing a query, a result object is returned.

The result object contains information about how the query affected the table.

The result object returned looks like this for instance:

{
fieldCount: 0,
affectedRows: 1,
insertId: 0,
serverStatus: 34,
warningCount: 0,
message: '',
protocol41: true,
changedRows: 0
}
