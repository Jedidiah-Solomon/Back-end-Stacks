const mysql = require("mysql");
const util = require("util"); // Require the util module explicitly

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jedybrown1234$",
    database: "web_dev_classroom",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.stack);
        return;
    }
    console.log("Connected to the database as id " + connection.threadId);
    // console.log(
    //     "Connection properties:",
    //     util.inspect(connection, { depth: null, colors: true })
    // );
    // console.log("Connection property names:", Object.keys(connection));
});

module.exports = connection;
