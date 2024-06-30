const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const formidable = require("formidable");
const nodemailer = require("nodemailer");

const senderEmail = "YOUREMAIL@email.com";
const senderPassword = "YOUR GMAIL APP PASSWORD OR ANY EMAIL SERVICE PROVIDER";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: senderEmail,
        pass: senderPassword,
    },
});

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let filePath = path.join(__dirname, "src", parsedUrl.pathname);

    // Handle routes
    if (parsedUrl.pathname === "/") {
        filePath = path.join(__dirname, "src", "index.html");
    } else if (parsedUrl.pathname === "/welcomeUser") {
        filePath = path.join(__dirname, "src", "pages", "welcomeUser.html");
    } else if (parsedUrl.pathname === "/news") {
        filePath = path.join(__dirname, "src", "pages", "news.html"); // Serve news.html for /news route
    } else if (
        parsedUrl.pathname === "/submit" &&
        req.method.toLowerCase() === "post"
    ) {
        // Handle form submission
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error("Error parsing form data:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }

            const { name, email, comment } = fields;

            // Read the HTML template for the welcome email
            fs.readFile(
                path.join(__dirname, "src", "pages", "welcomeMail.html"),
                "utf8",
                (err, data) => {
                    if (err) {
                        console.error(
                            "Error reading welcome email template:",
                            err
                        );
                        res.writeHead(500, { "Content-Type": "text/plain" });
                        res.end("Internal Server Error");
                        return;
                    }

                    const mailOptions = {
                        from: senderEmail,
                        to: email,
                        subject: `Welcome to Bathphage ICT Data Analysis Class 2024 | ${name}`,
                        html: data,
                    };

                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.error("Error sending email:", err);
                            res.writeHead(500, {
                                "Content-Type": "text/plain",
                            });
                            res.end("Internal Server Error");
                        } else {
                            console.log("Email sent:", info.response);
                            // Redirect to /news after successful form submission
                            res.writeHead(302, { Location: "/news" });
                            res.end();
                        }
                    });
                }
            );
        });

        return; // Important to return here to prevent further processing
    }

    // Serve static files (HTML, CSS, JS)
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
        } else {
            let contentType = "text/html";
            if (filePath.endsWith(".css")) {
                contentType = "text/css";
            } else if (filePath.endsWith(".js")) {
                contentType = "text/javascript";
            }

            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
    });
});

// Start the server
server.listen(3000, () => {
    console.log("Server running at http://127.0.0.1:3000/");
});
