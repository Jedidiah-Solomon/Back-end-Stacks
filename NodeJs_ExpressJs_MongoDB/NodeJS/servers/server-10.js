const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

// Create an HTTP server
http.createServer((req, res) => {
    if (req.url == "/upload" && req.method.toLowerCase() == "post") {
        // Parse the uploaded file
        const form = new formidable.IncomingForm();
        form.uploadDir = path.join(__dirname, "uploads"); // Set your own upload directory
        form.keepExtensions = true; // Keep file extension
        form.maxFileSize = 5 * 1024 * 1024; // Set max file size to 5MB

        form.parse(req, (err, fields, files) => {
            if (err) {
                if (err.code === "LIMIT_FILE_SIZE") {
                    res.writeHead(413, { "Content-Type": "text/plain" });
                    res.end("File size exceeds the limit of 5MB.");
                    return console.error(
                        "File size exceeds the limit of 5MB:",
                        err
                    );
                }
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return console.error("Error parsing the form:", err);
            }

            // Logging the files object to debug
            console.log("Uploaded files:", files);

            // Ensure fileToUpload exists and is an array
            if (
                !files.fileToUpload ||
                !Array.isArray(files.fileToUpload) ||
                files.fileToUpload.length === 0
            ) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("No file uploaded");
                return console.error("No file uploaded");
            }

            // Get the uploaded file details
            const uploadedFile = files.fileToUpload[0];
            const allowedTypes = [
                "image/png",
                "image/jpeg",
                "image/jpg",
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];
            if (!allowedTypes.includes(uploadedFile.mimetype)) {
                res.writeHead(415, { "Content-Type": "text/plain" });
                res.end(
                    "Unsupported file type. Allowed types: PNG, JPEG, JPG, PDF, DOCX."
                );
                return console.error(
                    "Unsupported file type:",
                    uploadedFile.mimetype
                );
            }

            const oldPath = uploadedFile.filepath;
            const newPath = path.join(
                form.uploadDir,
                uploadedFile.originalFilename
            );

            // Logging the paths to debug
            console.log("Old path:", oldPath);
            console.log("New path:", newPath);

            // Ensure the upload directory exists
            fs.mkdir(form.uploadDir, { recursive: true }, (err) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                    return console.error(
                        "Error creating the upload directory:",
                        err
                    );
                }

                // Move the file to the desired location
                fs.rename(oldPath, newPath, (err) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "text/plain" });
                        res.end("Internal Server Error");
                        return console.error("Error moving the file:", err);
                    }

                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.write("File uploaded and moved successfully!");
                    res.end();
                });
            });
        });
    } else if (req.url == "/") {
        // Serve the HTML form
        fs.readFile(
            path.join(__dirname, "src", "pages", "file_uploader.html"),
            (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                    return console.error("Error reading the HTML file:", err);
                }

                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        );
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
}).listen(3000, () => {
    console.log("Server running at http://127.0.0.1:3000/");
});
