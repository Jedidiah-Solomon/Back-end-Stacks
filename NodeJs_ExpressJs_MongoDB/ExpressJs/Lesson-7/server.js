const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const db = require("./config/db"); // Assuming you have a db.js file for database connection

const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "src")));

// Route for the home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Route for the signup page
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "signup.html"));
});

// Route for the login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "login.html"));
});

// Route for the news page
app.get("/news", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "news.html"));
});

// Route for signup
app.post("/signup", (req, res) => {
    const { email, password } = req.body;

    // Server-side validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            error: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        });
    }

    // Check if email already exists
    const checkEmailQuery = "SELECT email FROM users WHERE email = ?";
    db.query(checkEmailQuery, [email], (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Generate a salt and hash the password
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                console.error("Error generating salt:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    console.error("Error hashing password:", err);
                    return res
                        .status(500)
                        .json({ error: "Internal Server Error" });
                }

                // Store the email and hashed password in the database
                const query =
                    "INSERT INTO users (email, password) VALUES (?, ?)";
                db.query(query, [email, hash], (err, result) => {
                    if (err) {
                        console.error("Database error:", err);
                        return res
                            .status(500)
                            .json({ error: "Internal Server Error" });
                    }

                    res.status(201).json({
                        message: "User registered successfully",
                    });
                });
            });
        });
    });
});

// Route for login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Query the database for the user with the provided email
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Check if user with the email exists
        if (results.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        // User found, compare hashed password
        const hashedPassword = results[0].password;
        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
                console.error("Password comparison error:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            if (!isMatch) {
                return res.status(401).json({ error: "Incorrect password" });
            }

            // Login successful
            res.status(200).json({ message: "Login successful" });
        });
    });
});

// Error handler middleware for 404 Not Found
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "src", "pages", "404.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
