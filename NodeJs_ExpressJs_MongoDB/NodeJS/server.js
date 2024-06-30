const mysql = require("mysql");

// Create a connection to MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password1",
    database: "db_name", // Optionally specify the database name here
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to MySQL database successfully...");
});

// Example query execution (optional)
db.query("SELECT * FROM student_biodata", (err, results) => {
    if (err) {
        throw err;
    }
    console.log("Data fetched:", results);
});

const query2 =
    "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
db.query(query2, (err, results) => {
    if (err) {
        throw err;
    }
    console.log("Table created");
});

const query3 = "DELETE FROM customers WHERE address = 'Mountain 21'";
db.query(query3, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
});

// Close the connection when done (optional)
db.end();
