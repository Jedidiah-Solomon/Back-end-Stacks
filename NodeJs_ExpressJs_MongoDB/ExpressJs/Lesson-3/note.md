# EXPRESS JS

### MySQL

```
DB: customer_2024_jvn
CREATE TABLE new_customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);
```

#### .env file

Note: for xampp or similar environment for local testing, DB_PASSWORD="", so we leave it empty

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=customer_2024_jvn
```

`mysql.createConnection()`
This function is used to create a connection to your MySQL database. It takes an object as an argument with the following properties:

1. host: The hostname of the database you are connecting to. Here, it is set using process.env.DB_HOST, which means the value is taken from your environment variables.
2. user: The MySQL user to authenticate as. It is set using process.env.DB_USER.
3. password: The password of the MySQL user. It is set using process.env.DB_PASSWORD.
4. database: The name of the database to use. It is set using process.env.DB_NAME.

By using process.env, you are keeping sensitive information like database credentials out of your source code and instead loading them from environment variables.

`db.connect()`

```
This method establishes a connection to the MySQL database.
Callback Function: The function passed to db.connect() is a callback function that is executed after an attempt to connect to the database.
err: The err parameter represents any error that occurred during the connection attempt.
If there is an error (if (err)), it throws an error, which stops the server and logs the error.
If there is no error, it logs "MySQL connected..." to the console, indicating a successful connection.
```

So,

```
Route Definition:
app.post("/newCustomer", ...) defines a route that handles POST requests sent to /newCustomer.

Request Handler Function:
The function (req, res) is called whenever a POST request is made to this route.

Extracting Data from Request:
const { name, email, msg } = req.body; extracts the name, email, and msg fields from the request body, which are sent by the client. When the form is submitted, the client-side code sends the form data (name, email, and msg) to the server using a POST request. The server-side code then extracts these fields from the request body (req.body)

SQL Query Preparation:
const query = "INSERT INTO new_customers (name, email, message) VALUES (?, ?, ?)"; prepares an SQL query string to insert the data into the new_customers table.
The ? placeholders are used to safely insert the values, preventing SQL injection.

Executing the SQL Query:
db.query(query, [name, email, msg], (err, result) => { ... }) runs the query with the extracted data.

The query function takes the query string, an array of values to replace the ? placeholders, and a callback function to handle the result.

SQL Query String:

INSERT INTO new_customers (name, email, message) VALUES (?, ?, ?) is a string that represents the SQL query.
This query is designed to insert data into the new_customers table.
Table and Columns:

INSERT INTO new_customers specifies the table where the data will be inserted.
(name, email, message) specifies the columns in the new_customers table that will receive the data.
Placeholders:

VALUES (?, ?, ?) contains three placeholders (?) which will be replaced with actual values when the query is executed.
These placeholders are used to safely insert the values into the query.
Preventing SQL Injection:
Using placeholders (also known as parameterized queries) is a common technique to prevent SQL injection, a security vulnerability that occurs when an attacker can execute arbitrary SQL code on a database. Here's how it works:

Separation of Query and Data:

The query string is prepared with placeholders where the actual data values will be inserted.
This separation ensures that the data values are treated as data and not executable SQL code.

Database Driver Handling:

When the query is executed, the database driver replaces the placeholders with the actual values.
It properly escapes any special characters in the data values, preventing them from being interpreted as part of the SQL query.
```

```
Callback Function:

The db.query method takes two arguments: the SQL query string and an array of values to replace the placeholders.
The second argument is a callback function, which gets executed once the query completes.
Error Handling (err):

err is the first parameter in the callback function and represents any error that occurs during the execution of the SQL query.

If an error occurs, the err object will contain details about the error.

The common types of errors that can occur include:

Syntax Errors: Mistakes in the SQL query structure.
Connection Errors: Issues connecting to the database.
Constraint Violations: Violations of database constraints, such as unique key constraints or foreign key constraints.
Timeouts: The query taking too long to execute and timing out.
Server Errors: Any issues on the database server side.
The error handling block:


if (err) {
    return res.status(500).json({ error: err.message });
}

If err is not null, the server responds with a 500 status code, indicating an internal server error.
The error message (err.message) is sent in the response JSON.
Result Handling (result):

result is the second parameter in the callback function and represents the result of the SQL query execution.
If the query is successful, result will contain details about the execution, such as the number of affected rows or the inserted row ID.
The success handling block:

res.status(200).json({
    message: "Form Submitted successfully!",
    result,
});

If err is null, the server responds with a 200 status code, indicating a successful request.
A success message and the result of the query execution are sent in the response JSON.
Example of Error and Result Handling:
Consider the following scenarios to illustrate error and result handling:

Successful Query Execution:

The query executes without any issues.
err is null, and result contains details about the inserted row.
The server responds with:

{
    "message": "Form Submitted successfully!",
    "result": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 1,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}

SQL Syntax Error:

There's a mistake in the SQL query syntax (e.g., missing comma or typo).
err contains the error details, and result is undefined.
The server responds with:

{
    "error": "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '...' at line 1"
}
Connection Error:

There's an issue connecting to the MySQL database (e.g., wrong credentials or database server down).
err contains the error details, and result is undefined.
The server responds with:

{
    "error": "ER_ACCESS_DENIED_ERROR: Access denied for user 'user'@'localhost' (using password: YES)"
}
Constraint Violation:

The data being inserted violates a database constraint (e.g., unique email constraint).
err contains the error details, and result is undefined.
The server responds with:

{
    "error": "ER_DUP_ENTRY: Duplicate entry 'email@example.com' for key 'email'"
}
By handling errors and results properly, you ensure that your application can respond appropriately to different scenarios, providing meaningful feedback to users and maintaining robustness.
```

### To reset MySQL database to start auto increment form one again after data deletion

``ALTER TABLE new_customers AUTO_INCREMENT = 1;`
