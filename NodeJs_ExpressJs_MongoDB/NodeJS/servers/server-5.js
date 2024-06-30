const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // Step 1: Append content to file1.txt
    fs.appendFile("./src/files/file1.txt", "Hello new content!\n", (err) => {
        if (err) {
            throw err;
        }
        console.log("Content appended to file1.txt");

        // Step 2: Open file2.txt in write mode
        fs.open("./src/files/file2.txt", "w", (err, fd) => {
            if (err) {
                return console.error("Error opening file2.txt:", err);
            }

            console.log("File Descriptor for file2.txt:", fd);

            // Step 3: Write content to file2.txt
            fs.write(fd, "Hello new content in file2!\n", (err) => {
                if (err) {
                    return console.error("Error writing to file2.txt:", err);
                }
                console.log("Content written to file2.txt successfully!");

                // Step 4: Close file2.txt
                fs.close(fd, (err) => {
                    if (err) {
                        return console.error("Error closing file2.txt:", err);
                    }
                    console.log("file2.txt closed successfully.");

                    // Step 5: Write content to file3.txt
                    fs.writeFile(
                        "./src/files/file3.txt",
                        "Hello new content in file3!\n",
                        (err) => {
                            if (err) {
                                return console.error(
                                    "Error writing to file3.txt:",
                                    err
                                );
                            }
                            console.log(
                                "Content written to file3.txt successfully!"
                            );

                            // Step 6: Read content from file3.txt
                            fs.readFile(
                                "./src/files/file3.txt",
                                "utf8",
                                (err, data) => {
                                    if (err) {
                                        return console.error(
                                            "Error reading from file3.txt:",
                                            err
                                        );
                                    }
                                    console.log(
                                        "Content read from file3.txt:",
                                        data
                                    );

                                    // Step 7: Send response to the client
                                    res.writeHead(200, {
                                        "Content-Type": "text/plain",
                                    });
                                    res.end(
                                        `Content saved to files. Content of file3.txt: ${data}`
                                    );
                                }
                            );
                        }
                    );
                });
            });
        });
    });

    // Step 8: Delete file4.txt (ensure file4.txt exists before running the server)
    fs.unlink("./src/files/file4.txt", (err) => {
        if (err) {
            console.log("Error deleting file4.txt:", err.message);
        } else {
            console.log("File4 deleted successfully");
        }
    });

    // Step 9: Rename file5.txt to file5-renamed.txt (ensure file5.txt exists before running the server)
    fs.rename(
        "./src/files/file5.txt",
        "./src/files/file5-renamed.txt",
        (err) => {
            if (err) {
                console.log("Error renaming file5.txt:", err.message);
            } else {
                console.log("File5 renamed successfully");
            }
        }
    );
});

const PORT = 3000;
const HOST = "127.0.0.1";

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
