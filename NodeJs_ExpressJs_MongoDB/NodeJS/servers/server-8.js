const fs = require("fs");

// Specify the path to the file
const filePath = "./src/files/file3.txt";

// Create a readable stream from file3.txt
const readableStream = fs.createReadStream(filePath);

// Event listener for 'data' event
readableStream.on("data", (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

// Event listener for 'end' event
readableStream.on("end", () => {
    console.log("Reading file finished.");
});

// Event listener for 'error' event
readableStream.on("error", (err) => {
    console.error("Error reading file:", err);
});

//More Details - 2nd example
reader = fs.createReadStream("./src/files/file6.txt", {
    flag: "a+",
    encoding: "UTF-8",
    start: 5,
    end: 64,
    highWaterMark: 16,
});

// Read and display the file data on console
reader.on("data", function (chunk) {
    console.log(chunk);
    console.log(`Received ${chunk.length} bytes of data.`);
});
