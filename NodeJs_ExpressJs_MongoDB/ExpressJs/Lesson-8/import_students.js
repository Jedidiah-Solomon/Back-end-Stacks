const fs = require("fs");
const csv = require("csv-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "customer_2024_jvn",
});

connection.connect();

let rowCount = 0;
let processedCount = 0;

fs.createReadStream("students.csv")
    .pipe(csv())
    .on("data", async (row) => {
        rowCount++;
        const { id, email, password } = row;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            // Check if the user with the same id or email already exists
            const checkQuery = "SELECT * FROM users WHERE id = ? OR email = ?";
            connection.query(checkQuery, [id, email], (err, results) => {
                if (err) {
                    console.error("Database query error:", err);
                    processedCount++;
                    if (processedCount === rowCount) {
                        connection.end();
                    }
                } else if (results.length > 0) {
                    console.log(
                        `User with id: ${id} or email: ${email} already exists. Skipping insert.`
                    );
                    processedCount++;
                    if (processedCount === rowCount) {
                        connection.end();
                    }
                } else {
                    // Insert new user if no duplicates are found
                    const insertQuery =
                        "INSERT INTO users (id, email, password) VALUES (?, ?, ?)";
                    connection.query(
                        insertQuery,
                        [id, email, hashedPassword],
                        (err, results) => {
                            processedCount++;
                            if (err) {
                                console.error("Database insert error:", err);
                            } else {
                                console.log(
                                    `Inserted user with email: ${email}`
                                );
                            }
                            if (processedCount === rowCount) {
                                connection.end();
                            }
                        }
                    );
                }
            });
        } catch (error) {
            console.error("Error hashing password:", error);
            processedCount++;
            if (processedCount === rowCount) {
                connection.end();
            }
        }
    })
    .on("end", () => {
        console.log("CSV file successfully processed");
        if (rowCount === 0) {
            connection.end();
        }
    });
