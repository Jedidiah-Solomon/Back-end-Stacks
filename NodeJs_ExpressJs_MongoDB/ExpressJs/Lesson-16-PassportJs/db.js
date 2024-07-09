const mysql = require("mysql");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB,
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:".red, err.stack);
        return;
    }
    console.log(
        "MySQL database connection: Connection status --".cyan,
        connection.state.green,
        "& Connection thread --".blue,
        connection.threadId.toString().yellow
    );
});

module.exports = connection;

// ----------------------------------------Create Table in db------------------------
// CREATE TABLE customerscustomers (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL
// );
