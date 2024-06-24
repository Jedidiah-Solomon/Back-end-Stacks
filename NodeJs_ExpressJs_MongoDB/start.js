const { exec } = require("child_process");

// Start the server with nodemon
const server = exec("npx nodemon app9.js"); //use any app e.g app_6.js

// Use dynamic import to load the `open` package
setTimeout(async () => {
    const open = await import("open");
    open.default("http://127.0.0.1:3502"); // Update the URL to match your server's URL
}, 3000); // Adjust the delay if needed

// Forward output from the server to the console
server.stdout.pipe(process.stdout);
server.stderr.pipe(process.stderr);
