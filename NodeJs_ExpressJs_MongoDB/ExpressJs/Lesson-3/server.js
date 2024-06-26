const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3005;

//Middleware
const logHeaders = (req, res, next) => {
    console.log("Headers:");
    console.log(req.headers);
    next();
};

const logger = (req, res, next) => {
    console.log("Logging...");
    next();
};

app.use(logHeaders);
app.use(logger);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//End of middleware - Ensure it comes in the correct order - before a request for instance. This middleware function logs "Logging..." to the console every time a request is made to the server.

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL connected...");
});

// Route to handle form submission
app.post("/newCustomer", (req, res) => {
    const { name, email, msg } = req.body;
    const query =
        "INSERT INTO new_customers (name,email,message) VALUES (?, ?, ?)";

    db.query(query, [name, email, msg], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({
            message: "Form Submitted successfully!",
            result,
        });
    });
});

// Route to handle login  | Use password for this, I used the Id just to test.
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM new_customers WHERE email = ? AND id = ?";

    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error("MySQL error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (results.length > 0) {
            // User found, authentication successful
            res.status(200).json({ message: "Login successful" });
        } else {
            // User not found, authentication failed
            res.status(404).sendFile(
                path.join(__dirname, "public", "pages", "404.html")
            );
        }
    });
});

// Route to handle update
app.put("/update", (req, res) => {
    const { email, password, msg } = req.body;
    const query =
        "UPDATE new_customers SET message = ? WHERE email = ? AND id = ?";

    db.query(query, [msg, email, password], (err, result) => {
        if (err) {
            console.error("MySQL error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.affectedRows > 0) {
            // Update successful
            res.status(200).json({ message: "Message updated successfully" });
        } else {
            // No matching record found
            res.status(404).json({ error: "User not found or ID incorrect" });
        }
    });
});

// Route to handle customer deletion
app.delete("/delete", (req, res) => {
    const { email, password } = req.body;
    const query = "DELETE FROM new_customers WHERE email = ? AND id = ?";

    db.query(query, [email, password], (err, result) => {
        if (err) {
            console.error("Delete query error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.affectedRows > 0) {
            res.status(200).json({ message: "Customer deleted successfully" });
            // Log specific properties
            console.log("Affected Rows:", result.affectedRows);
            console.log("Insert ID:", result.insertId); // Only for INSERT queries
        } else {
            res.status(404).json({
                error: "Customer not found or ID incorrect",
            });
        }
    });
});

// Route for handling 404 errors
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "public", "pages", "404.html")
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
