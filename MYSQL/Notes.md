# MYSQL QUERIES

**Note: ctrl + shift + v = Preview Markdown files**

```
CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL
);

ALTER TABLE p6_uk_bank_customers
ALTER COLUMN email SET DEFAULT 'example@email.com';
ALTER TABLE p6_uk_bank_customers ADD gender CHAR(1) AFTER email;
ALTER TABLE cats DROP gender;


SELECT MAX(Student_ID) AS last_id FROM p6_uk_bank_customers;
```

```
INSERT INTO users (username, email, password) VALUES ('user1', 'user1@example.com', 'password1'), ('user2', 'user2@example.com', 'password2');

INSERT INTO cats ( name, owner, birth) VALUES
  ( 'Sandy', 'Lennon', '2015-01-03' ),
  ( 'Cookie', 'Casey', '2013-11-13' ),
  ( 'Charlie', 'River', '2016-05-21' );

```

```
SELECT TOP 3 * FROM Customers;

SELECT CustomerName, City FROM Customers;

SELECT COUNT(DISTINCT Country) FROM Customers;

SELECT * FROM Customers WHERE Country='Mexico';
SELECT * FROM Customers WHERE CustomerID > 80;
SELECT * FROM Products WHERE Price BETWEEN 50 AND 60;
SELECT * FROM Customers WHERE City LIKE 's%';
SELECT * FROM Customers WHERE City IN ('Paris','London');
SELECT * FROM Products WHERE Price <> 18;
```

```
SELECT * FROM Products ORDER BY Price DESC;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;

SELECT * FROM Customers WHERE Country = 'Spain' AND CustomerName LIKE 'G%';
SELECT * FROM Customers WHERE Country = 'Spain' OR CustomerName LIKE 'G%';
SELECT * FROM Customers WHERE NOT Country = 'Spain' ;
```

```
SELECT column_names FROM table_name WHERE column_name IS NULL;
SELECT column_names FROM table_name WHERE column_name IS NOT NULL;

UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
DELETE FROM Customers;
DROP TABLE Customers;

```

```
SQL Aggregate Functions
An aggregate function is a function that performs a calculation on a set of values, and returns a single value.

Aggregate functions are often used with the GROUP BY clause of the SELECT statement. The GROUP BY clause splits the result-set into groups of values and the aggregate function can be used to return a single value for each group.

The most commonly used SQL aggregate functions are:

MIN() - returns the smallest value within the selected column
MAX() - returns the largest value within the selected column
COUNT() - returns the number of rows in a set
SUM() - returns the total sum of a numerical column
AVG() - returns the average value of a numerical column
Aggregate functions ignore null values (except for COUNT()).

Example
Suppose you have a table called products with a column price, and you want to find the minimum price of all products:

SELECT MIN(price) AS min_price FROM products;

if you want to count the number of products in the products table

SELECT COUNT(*) AS total_products FROM products;

if you want to count the number of products in the products table where the category is 'Electronics'

SELECT COUNT(*) AS electronics_products_count FROM products WHERE category = 'Electronics';


When alias is used on column:

SELECT column_name AS alias_name
FROM table_name;

When alias is used on table:

SELECT column_name(s)
FROM table_name AS alias_name;


Using Aliases With a Space Character
If you want your alias to contain one or more spaces, like "My Great Products", surround your alias with square brackets or double quotes.

Example
Using [square brackets] for aliases with space characters:

SELECT ProductName AS [My Great Products]
FROM Products;
Example
Using "double quotes" for aliases with space characters:

SELECT ProductName AS "My Great Products"
FROM Products;

SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address FROM Customers;

```

```
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;


SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;



SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;


SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;


SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;



SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;


SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;


SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers
ORDER BY City;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;


SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM (Orders
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 10;


SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);

SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);

SELECT ALL ProductName
FROM Products
WHERE TRUE;


SELECT ProductName
FROM Products
WHERE ProductID = ALL
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);


SELECT column1, column2, column3, ...
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;

The following SQL statement uses the IN clause to copy the table into a new table in another database:

SELECT * INTO CustomersBackup2017 IN 'Backup.mdb'
FROM Customers;
The following SQL statement copies only a few columns into a new table:

SELECT CustomerName, ContactName INTO CustomersBackup2017
FROM Customers;
The following SQL statement copies only the German customers into a new table:

SELECT * INTO CustomersGermany
FROM Customers
WHERE Country = 'Germany';


Copy all columns from one table to another table:

INSERT INTO table2
SELECT * FROM table1
WHERE condition;
Copy only some columns from one table into another table:

INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;


CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;


SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;



SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
FROM Products;
or we can use the COALESCE() function, like this:

SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
FROM Products;
```

```
What is a Stored Procedure?
A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.

You can also pass parameters to a stored procedure, so that the stored procedure can act based on the parameter value(s) that is passed.

Stored Procedure Syntax
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;


Execute a Stored Procedure
EXEC procedure_name;

CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;
Execute the stored procedure above as follows:

EXEC SelectAllCustomers;



CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City
GO;

EXEC SelectAllCustomers @City = 'London';


So, nvarchar(30) means that the parameter @City is expected to be a string (text) value with a maximum length of 30 characters.


CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
GO;
Execute the stored procedure above as follows:

Example
EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';
```

```
 single-line comment as an explanation:
-- Select all:
SELECT * FROM Customers;


single-line comment to ignore the end of a line:
SELECT * FROM Customers -- WHERE City='Berlin';

Multi-line Comments

/*Select all the columns
of all the records
in the Customers table:*/
SELECT * FROM Customers;
```

```
Operator	Description
+	Add
-	Subtract
*	Multiply
/	Divide
%	Modulo
```

```
CREATE DATABASE testDB;

DROP DATABASE testDB;

The SQL BACKUP DATABASE Statement
The BACKUP DATABASE statement is used in SQL Server to create a full back up of an existing SQL database.

Syntax
BACKUP DATABASE databasename
TO DISK = 'filepath';
The SQL BACKUP WITH DIFFERENTIAL Statement
A differential back up only backs up the parts of the database that have changed since the last full database backup.

Syntax
BACKUP DATABASE databasename
TO DISK = 'filepath'
WITH DIFFERENTIAL;

BACKUP DATABASE testDB
TO DISK = 'D:\backups\testDB.bak'
WITH DIFFERENTIAL;

he path D:\backups\testDB.bak refers to a location on the file system of a computer. Specifically, it represents a file named testDB.bak located in the backups directory on the D: drive.

If you're executing this SQL command on a database server, then the backup file will be created on the file system of that server, typically in the D:\backups directory. The exact location depends on the configuration of the server and where it is set up to store backup files.

If you're executing this command on your local machine using a database management tool, such as SQL Server Management Studio, then the backup file will be created on your local file system at the specified location (D:\backups\testDB.bak), assuming you have the necessary permissions to write to that directory.


CREATE TABLE new_table_name AS
    SELECT column1, column2,...
    FROM existing_table_name
    WHERE ....;

The TRUNCATE TABLE statement is used to delete the data inside a table, but not the table itself.

Syntax
TRUNCATE TABLE table_name;

The DROP TABLE statement is used to drop an existing table in a database.

Syntax
DROP TABLE table_name;

ALTER TABLE Customers
ADD Email varchar(255);

ALTER TABLE Customers
DROP COLUMN Email;

ALTER TABLE Persons
MODIFY COLUMN DateOfBirth year;


MySQL Constraints
SQL constraints are used to specify rules for the data in a table.

Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.

Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.

The following constraints are commonly used in SQL:

NOT NULL - Ensures that a column cannot have a NULL value
UNIQUE - Ensures that all values in a column are different
PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
FOREIGN KEY - Prevents actions that would destroy links between tables
CHECK - Ensures that the values in a column satisfies a specific condition
DEFAULT - Sets a default value for a column if no value is specified
CREATE INDEX - Used to create and retrieve data from the database very quickly




NOT NULL on CREATE TABLE
The following SQL ensures that the "ID", "LastName", and "FirstName" columns will NOT accept NULL values when the "Persons" table is created:

Example
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);
NOT NULL on ALTER TABLE
To create a NOT NULL constraint on the "Age" column when the "Persons" table is already created, use the following SQL:

Example
ALTER TABLE Persons
MODIFY Age int NOT NULL;




UNIQUE Constraint on CREATE TABLE
The following SQL creates a UNIQUE constraint on the "ID" column when the "Persons" table is created:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);
To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns, use the following SQL syntax:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT UC_Person UNIQUE (ID,LastName)
);

UNIQUE Constraint on ALTER TABLE
To create a UNIQUE constraint on the "ID" column when the table is already created, use the following SQL:

ALTER TABLE Persons
ADD UNIQUE (ID);
To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns, use the following SQL syntax:

ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);
DROP a UNIQUE Constraint
To drop a UNIQUE constraint, use the following SQL:

ALTER TABLE Persons
DROP INDEX UC_Person;


CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);
To allow naming of a PRIMARY KEY constraint, and for defining a PRIMARY KEY constraint on multiple columns, use the following SQL syntax:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);
Note: In the example above there is only ONE PRIMARY KEY (PK_Person). However, the VALUE of the primary key is made up of TWO COLUMNS (ID + LastName).


PRIMARY KEY on ALTER TABLE
To create a PRIMARY KEY constraint on the "ID" column when the table is already created, use the following SQL:

ALTER TABLE Persons
ADD PRIMARY KEY (ID);
To allow naming of a PRIMARY KEY constraint, and for defining a PRIMARY KEY constraint on multiple columns, use the following SQL syntax:

ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);

DROP a PRIMARY KEY Constraint
To drop a PRIMARY KEY constraint, use the following SQL:

ALTER TABLE Persons
DROP PRIMARY KEY;


MySQL FOREIGN KEY Constraint
The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.

A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.

FOREIGN KEY on CREATE TABLE
The following SQL creates a FOREIGN KEY on the "PersonID" column when the "Orders" table is created:

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
To allow naming of a FOREIGN KEY constraint, and for defining a FOREIGN KEY constraint on multiple columns, use the following SQL syntax:

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
);
FOREIGN KEY on ALTER TABLE
To create a FOREIGN KEY constraint on the "PersonID" column when the "Orders" table is already created, use the following SQL:

ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
To allow naming of a FOREIGN KEY constraint, and for defining a FOREIGN KEY constraint on multiple columns, use the following SQL syntax:

ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
DROP a FOREIGN KEY Constraint
To drop a FOREIGN KEY constraint, use the following SQL:

ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder;


CHECK on CREATE TABLE
The following SQL creates a CHECK constraint on the "Age" column when the "Persons" table is created. The CHECK constraint ensures that the age of a person must be 18, or older:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);

To allow naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns, use the following SQL syntax:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);

CHECK on ALTER TABLE
To create a CHECK constraint on the "Age" column when the table is already created, use the following SQL:

ALTER TABLE Persons
ADD CHECK (Age>=18);
To allow naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns, use the following SQL syntax:

ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');
DROP a CHECK Constraint
To drop a CHECK constraint, use the following SQL:

ALTER TABLE Persons
DROP CHECK CHK_PersonAge;

DEFAULT on CREATE TABLE
The following SQL sets a DEFAULT value for the "City" column when the "Persons" table is created:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);

The DEFAULT constraint can also be used to insert system values, by using functions like CURRENT_DATE():

CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT CURRENT_DATE()
);

DEFAULT on ALTER TABLE
To create a DEFAULT constraint on the "City" column when the table is already created, use the following SQL:

ALTER TABLE Persons
ALTER City SET DEFAULT 'Sandnes';
DROP a DEFAULT Constraint
To drop a DEFAULT constraint, use the following SQL:

ALTER TABLE Persons
ALTER City DROP DEFAULT;

MySQL AUTO_INCREMENT Keyword
MySQL uses the AUTO_INCREMENT keyword to perform an auto-increment feature.

By default, the starting value for AUTO_INCREMENT is 1, and it will increment by 1 for each new record.

The following SQL statement defines the "Personid" column to be an auto-increment primary key field in the "Persons" table:

CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);

To let the AUTO_INCREMENT sequence start with another value, use the following SQL statement:

ALTER TABLE Persons AUTO_INCREMENT=100;
When we insert a new record into the "Persons" table, we do NOT have to specify a value for the "Personid" column (a unique value will be added automatically):

INSERT INTO Persons (FirstName,LastName)
VALUES ('Lars','Monsen');

MySQL Date Data Types
MySQL comes with the following data types for storing a date or a date/time value in the database:

DATE - format YYYY-MM-DD
DATETIME - format: YYYY-MM-DD HH:MI:SS
TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
YEAR - format YYYY or YY
Note: The date data type are set for a column when you create a new table in your database!

Tip: To keep your queries simple and easy to maintain, do not use time-components in your dates, unless you have to!



MySQL CREATE VIEW Statement
In SQL, a view is a virtual table based on the result-set of an SQL statement.

A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

You can add SQL statements and functions to a view and present the data as if the data were coming from one single table.

A view is created with the CREATE VIEW statement.

CREATE VIEW Syntax
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
Note: A view always shows up-to-date data! The database engine recreates the view, every time a user queries it.

MySQL Updating a View
A view can be updated with the CREATE OR REPLACE VIEW statement.

CREATE OR REPLACE VIEW Syntax
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
The following SQL adds the "City" column to the "Brazil Customers" view:

Example
CREATE OR REPLACE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName, City
FROM Customers
WHERE Country = 'Brazil';

MySQL Dropping a View
A view is deleted with the DROP VIEW statement.

DROP VIEW Syntax
DROP VIEW view_name;
```

```
String Functions
ASCII
CHAR_LENGTH
CHARACTER_LENGTH
CONCAT
CONCAT_WS
FIELD
FIND_IN_SET
FORMAT
INSERT
INSTR
LCASE
LEFT
LENGTH
LOCATE
LOWER
LPAD
LTRIM
MID
POSITION
REPEAT
REPLACE
REVERSE
RIGHT
RPAD
RTRIM
SPACE
STRCMP
SUBSTR
SUBSTRING
SUBSTRING_INDEX
TRIM
UCASE
UPPER
Numeric Functions
ABS
ACOS
ASIN
ATAN
ATAN2
AVG
CEIL
CEILING
COS
COT
COUNT
DEGREES
DIV
EXP
FLOOR
GREATEST
LEAST
LN
LOG
LOG10
LOG2
MAX
MIN
MOD
PI
POW
POWER
RADIANS
RAND
ROUND
SIGN
SIN
SQRT
SUM
TAN
TRUNCATE
Date Functions
ADDDATE
ADDTIME
CURDATE
CURRENT_DATE
CURRENT_TIME
CURRENT_TIMESTAMP
CURTIME
DATE
DATEDIFF
DATE_ADD
DATE_FORMAT
DATE_SUB
DAY
DAYNAME
DAYOFMONTH
DAYOFWEEK
DAYOFYEAR
EXTRACT
FROM_DAYS
HOUR
LAST_DAY
LOCALTIME
LOCALTIMESTAMP
MAKEDATE
MAKETIME
MICROSECOND
MINUTE
MONTH
MONTHNAME
NOW
PERIOD_ADD
PERIOD_DIFF
QUARTER
SECOND
SEC_TO_TIME
STR_TO_DATE
SUBDATE
SUBTIME
SYSDATE
TIME
TIME_FORMAT
TIME_TO_SEC
TIMEDIFF
TIMESTAMP
TO_DAYS
WEEK
WEEKDAY
WEEKOFYEAR
YEAR
YEARWEEK
Advanced Functions
BIN
BINARY
CASE
CAST
COALESCE
CONNECTION_ID
CONV
CONVERT
CURRENT_USER
DATABASE
IF
IFNULL
ISNULL
LAST_INSERT_ID
NULLIF
SESSION_USER
SYSTEM_USER
USER
VERSION
```

```
USING SQL CMD

1. SHOW TABLES;
2. DESCRIBE table_name;

recall we have
Field - - shows the column names
Type -- e.g Int, Varchar
Null - - if Null, that means empty else put NOT NULL
KEY -- PRI, FOREIGN
DEFAULT - THE CHARACTER THAT WILL BE THERE E.G NULL, OF URS
EXTRA - AUTO_INCREMENT

Null:

The "Null" attribute indicates whether a field can contain NULL values or not. If it's set to "YES", the field can contain NULL values, meaning it can be left empty. If it's set to "NO", the field cannot be NULL, and it must contain a value.

EXTRA:

The "EXTRA" attribute contains additional information about the field that doesn't fit into other columns. For example, it may indicate auto-incrementing, whether a field is stored or virtual, etc.


```

my-project/
│
├── Frontend/
│ ├── index.html
│ ├── styles.css
│ ├── custom.js
│ └── pages/
│ └── products.html
│
├── Backend/
│ ├── db/
│ │ └── database.js
│ ├── routes/
│ │ └── routes.js
│ ├── server.js
│ ├── .env
│ ├── package.json
│ ├── package-lock.json
│ └── node_modules/
│
├── README.md
|--note.md
└── .gitignore

```

```

# Introduction to MySQL

```
MySQL is a very popular open-source relational database management system (RDBMS).

What is MySQL?
MySQL is a relational database management system
MySQL is open-source
MySQL is free
MySQL is ideal for both small and large applications
MySQL is very fast, reliable, scalable, and easy to use
MySQL is cross-platform
MySQL is compliant with the ANSI SQL standard
MySQL was first released in 1995
MySQL is developed, distributed, and supported by Oracle Corporation
MySQL is named after co-founder Monty Widenius's daughter: My
Who Uses MySQL?
Huge websites like Facebook, Twitter, Airbnb, Booking.com, Uber, GitHub, YouTube, etc.
Content Management Systems like WordPress, Drupal, Joomla!, Contao, etc.
A very large number of web developers around the world
Show Data On Your Web Site
To build a web site that shows data from a database, you will need:

An RDBMS database program (like MySQL)
A server-side scripting language, like PHP
To use SQL to get the data you want
To use HTML / CSS to style the page


What is RDBMS?
RDBMS stands for Relational Database Management System.

RDBMS is a program used to maintain a relational database.

RDBMS is the basis for all modern database systems such as MySQL, Microsoft SQL Server, Oracle, and Microsoft Access.

RDBMS uses SQL queries to access the data in the database.

What is a Database Table?
A table is a collection of related data entries, and it consists of columns and rows.

A column holds specific information about every record in the table.

A record (or row) is each individual entry that exists in a table.

What is SQL?
SQL is the standard language for dealing with Relational Databases.

SQL is used to insert, search, update, and delete database records.

How to Use SQL
The following SQL statement selects all the records in the "Customers" table:
```

```
SELECT * FROM Customers;
```

Some of The Most Important SQL Commands
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index

```
SELECT column1, column2 FROM table_name;

SELECT * FROM table_name;

SELECT * FROM Customers WHERE Country='Mexico';

SELECT * FROM Customers WHERE Country = 'Germany' AND City = 'Berlin';

SELECT * FROM Customers WHERE City = 'Berlin' OR City = 'Stuttgart';

SELECT * FROM Customers WHERE NOT Country = 'Germany';

SELECT * FROM Customers WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'Stuttgart');

SELECT * FROM Customers ORDER BY Country DESC;

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country) VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

UPDATE Customers SET ContactName = 'Alfred Schmidt', City = 'Frankfurt' WHERE CustomerID = 1;

UPDATE Customers SET PostalCode = 00000 WHERE Country = 'Mexico';

DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

SELECT * FROM Customers LIMIT 3;

SELECT * FROM Customers LIMIT 3 OFFSET 3;

SELECT MIN(Price) AS SmallestPrice FROM Products;

SELECT * FROM Customers WHERE CustomerName LIKE 'a%';

SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');

INSERT INTO Customer (LastName, FirstName, Email, Phone, Gender) VALUES
('Smith', 'John', 'john.smith@example.com', '123-456-7890', 'Male'),
('Walker', 'Kimberly', 'kimberly.walker@example.com', '890-123-4567', 'Female');

CREATE DATABASE testDB;

DROP DATABASE testDB;

CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

ALTER TABLE Customers ADD Email varchar(255);

ALTER TABLE Persons DROP COLUMN Address;


```

```
A database called "Hungsmeal-Group"

Table: Customer
This table stores information about customers.
It has columns for CustomerID (Primary Key), LastName, FirstName, Email, and Phone.

CREATE TABLE Customer (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    LastName VARCHAR(255),
    FirstName VARCHAR(255),
    Email VARCHAR(255),
    Phone VARCHAR(20),
    Gender ENUM('Male', 'Female', 'Others')
);


Table: Order
This table stores information about orders.
It has columns for OrderID (Primary Key), CustomerID (Foreign Key referencing Customer table), OrderDate, and TotalAmount.

CREATE TABLE `Order` (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);



Table: OrderItem
This table stores information about items within each order.
It has columns for OrderItemID (Primary Key), OrderID (Foreign Key referencing Order table), ProductName, Quantity, and Price.

CREATE TABLE OrderItem (
    OrderItemID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    ProductName VARCHAR(255),
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID)
);



```

## MySQL's LOAD DATA INFILE statement

```
LOAD DATA INFILE '/path/to/your/file.csv'
INTO TABLE your_table
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

```

Example:

```
LOAD DATA INFILE 'C:\xampp\mysql\data\Customer.csv'
INTO TABLE hungsmeal_group
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;
```

---

# Database (DB):

A structured collection of data that can be easily accessed, managed, and updated.
Examples: Employee records, product inventory, customer orders.

## Types:

Relational and non-relational databases.

### Database Management System (DBMS):

Software that facilitates database creation, maintenance, and interaction.
Examples: MySQL, PostgreSQL, Oracle.

Pros: Efficient data retrieval, data integrity, security.
Cons: Complexity, potential performance bottlenecks.

#### Relational vs. Non-Relational Databases:

Relational DB:
Organized into tables with rows (records) and columns (attributes).
Suitable for structured data.
Examples: MySQL, PostgreSQL.

Non-Relational DB:
Flexible schema (e.g., key-value stores, document databases).
Ideal for unstructured or semi-structured data.
Examples: MongoDB, Cassandra.

#### MySQL Introduction:

Open-source RDBMS.
Widely used for web applications, analytics, and data-driven decision-making.
Efficient, scalable, and secure.

#### Parts of MySQL:

1. Server: Core component that manages databases.
2. Client: Interface for users to interact with the server.
3. Database: Container for tables and data.
4. Table: Holds data in rows and columns.
5. Query: SQL statements to retrieve or manipulate data.

#### Navigating MySQL:

Install MySQL server and client.
Access the MySQL command-line interface (CLI) or graphical tools like MySQL Workbench.
Use commands like mysql, show databases;, and use database_name;

Basic Syntax:
SELECT: Retrieve data from tables.
INSERT: Add new records.
UPDATE: Modify existing data.
DELETE: Remove records.
Example:
SQL

`SELECT column1, column2 FROM table_name WHERE condition;`

---

MySQL Shell Commands https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-commands.html
MySQL Shell provides commands which enable you to modify the execution environment of the code editor, for example to configure the active programming language or a MySQL Server connection. The following table lists the commands that are available regardless of the currently selected language. As commands need to be available independent of the execution mode, they start with an escape sequence, the \ character.

Command Alias/Shortcut Description
\help

\h or \?

Print help about MySQL Shell, or search the online help.

\quit

\q or \exit

Exit MySQL Shell.

\

In SQL mode, begin multiple-line mode. Code is cached and executed when an empty line is entered.

\status

\s

Show the current MySQL Shell status.

\js

Switch execution mode to JavaScript.

\py

Switch execution mode to Python.

\sql

Switch execution mode to SQL.

\connect

\c

Connect to a MySQL instance.

\reconnect

Reconnect to the same MySQL instance.

\disconnect

Disconnect the global session.

\use

\u

Specify the schema to use.

\source

\. or source (no backslash)

Execute a script file using the active language.

\warnings

\W

Show any warnings generated by a statement.

\nowarnings

\w

Do not show any warnings generated by a statement.

\history

View and edit command line history.

\rehash

Manually update the autocomplete name cache.

\option

Query and change MySQL Shell configuration options.

\show

Run the specified report using the provided options and arguments.

\watch

Run the specified report using the provided options and arguments, and refresh the results at regular intervals.

\edit

\e

Open a command in the default system editor then present it in MySQL Shell.

\pager

\P

Configure the pager which MySQL Shell uses to display text.

\nopager

Disable any pager which MySQL Shell was configured to use.

\system

\!

Run the specified operating system command and display the results in MySQL Shell.

Help Command
The \help command can be used with or without a parameter. When used without a parameter a general help message is printed including information about the available MySQL Shell commands, global objects and main help categories.

When used with a parameter, the parameter is used to search the available help based on the mode which the MySQL Shell is currently running in. The parameter can be a word, a command, an API function, or part of an SQL statement. The following categories exist:

AdminAPI - details the dba global object and the AdminAPI, which enables you to work with InnoDB Cluster, InnoDB ClusterSet, and InnoDB ReplicaSet.

X DevAPI - details the mysqlx module as well as the capabilities of the X DevAPI, which enable you to work with MySQL as a Document Store

Shell Commands - provides details about the available built-in MySQL Shell commands.

ShellAPI - contains information about the shell and util global objects, as well as the mysql module that enables executing SQL on MySQL Servers.

SQL Syntax - entry point to retrieve syntax help on SQL statements.

To search for help on a topic, for example an API function, use the function name as a pattern. You can use the wildcard characters ? to match any single character and \* to match multiple characters in a search. The wildcard characters can be used one or more times in the pattern. The following namespaces can also be used when searching for help:

dba for AdminAPI

mysqlx for X DevAPI

mysql for ShellAPI for classic MySQL protocol

shell for other ShellAPI classes: Shell, Sys, Options

commands for MySQL Shell commands

cmdline for the mysqlsh command interface

For example to search for help on a topic, issue \help pattern and:

use x devapi to search for help on the X DevAPI

use \c to search for help on the MySQL Shell \connect command

use getCluster or dba.getCluster to search for help on the AdminAPI dba.getCluster() operation

use Table or mysqlx.Table to search for help on the X DevAPI Table class

when MySQL Shell is running in JavaScript mode, use isView, Table.isView or mysqlx.Table.isView to search for help on the isView function of the Table object

when MySQL Shell is running in Python mode, use is_view, Table.is_view or mysqlx.Table.is_view to search for help on the isView function of the Table object

when MySQL Shell is running in SQL mode, if a global session to a MySQL server exists SQL help is displayed. For an overview use sql syntax as the search pattern.

Depending on the search pattern provided, one or more results could be found. If only one help topic contains the search pattern in its title, that help topic is displayed. If multiple topic titles match the pattern but one is an exact match, that help topic is displayed, followed by a list of the other topics with pattern matches in their titles. If no exact match is identified, a list of topics with pattern matches in their titles is displayed. If a list of topics is returned, you can select a topic to view from the list by entering the command again with an extended search pattern that matches the title of the relevant topic.

Connect, Reconnect, and Disconnect Commands
The \connect command is used to connect to a MySQL Server. See Section 4.3, “MySQL Shell Connections”.

For example:

\connect root@localhost:3306
If a password is required you are prompted for it.

Use the --mysqlx (--mx) option to create a session using the X Protocol to connect to MySQL server instance. For example:

\connect --mysqlx root@localhost:33060
Use the --mysql (--mc) option to create a ClassicSession, enabling you to use classic MySQL protocol to issue SQL directly on a server. For example:

\connect --mysql root@localhost:3306
The use of a single dash with the short form options (that is, -mx and -mc) is deprecated from version 8.0.13 of MySQL Shell.

Use the --ssh option (available from MySQL Shell 8.0.28) to create or reuse an SSH tunnel that provides an encrypted connection to the MySQL server instance. The use of AdminAPI commands is not supported over connections made from MySQL Shell using SSH tunneling. Supply the URI for connection to the SSH server in the format [user@]hostname[:port], followed by the MySQL instance URI, for example:

\connect --ssh root@198.51.100.4:2222 root@localhost:3306
When you use the --ssh option, the port for connection to the MySQL server instance must be specified in the MySQL instance URI.

An SSH tunnel set up using the \connect command must use the default SSH configuration file and identity file. For instructions to set these and further information on SSH tunnel connections from MySQL Shell, see Section 4.3.6, “Using an SSH Tunnel”. You can set up an SSH tunnel using the shell.connect() method or on the command line to get additional setup options. Once established, an SSH tunnel can be shared between connections to the same host from the same user connecting from the same instance, whatever setup method was originally used.

The \reconnect command is specified without any parameters or options. If the connection to the server is lost, you can use the \reconnect command, which makes MySQL Shell try several reconnection attempts for the session using the existing connection parameters. If those attempts are unsuccessful, you can make a fresh connection using the \connect command and specifying the connection parameters.

The \disconnect command, available from MySQL Shell 8.0.22, is also specified without any parameters or options. The command disconnects MySQL Shell's global session (the session represented by the session global object) from the currently connected MySQL server instance, so that you can close the connection but still continue to use MySQL Shell.

If the connection to the server is lost, you can use the \reconnect command, which makes MySQL Shell try several reconnection attempts for the session using the existing connection parameters. If those attempts are unsuccessful, you can make a fresh connection using the \connect command and specifying the connection parameters.

Status Command
The \status command displays information about the current global connection. This includes information about the server connected to, the character set in use, uptime, and so on.

Source Command
The \source command or its alias \. can be used in MySQL Shell's interactive mode to execute code from a script file at a given path. For example:

\source /tmp/mydata.sql
You can execute either SQL, JavaScript or Python code. The code in the file is executed using the active language, so to process SQL code the MySQL Shell must be in SQL mode.

Warning
As the code is executed using the active language, executing a script in a different language than the currently selected execution mode language could lead to unexpected results.

From MySQL Shell 8.0.19, for compatibility with the mysql client, in SQL mode only, you can execute code from a script file using the source command with no backslash and an optional SQL delimiter. source or the alias \. (which does not use an SQL delimiter) can be used both in MySQL Shell's interactive mode for SQL, to execute a script directly, and in a file of SQL code processed in batch mode, to execute a further script from within the file. So with MySQL Shell in SQL mode, you could now execute the script in the /tmp/mydata.sql file from either interactive mode or batch mode using any of these three commands:

source /tmp/mydata.sql;
source /tmp/mydata.sql
\. /tmp/mydata.sql  
The command \source /tmp/mydata.sql is also valid, but in interactive mode only.

In interactive mode, the \source, \. or source command itself is added to the MySQL Shell history, but the contents of the executed script file are not added to the history.

Use Command
The \use command enables you to choose which schema is active, for example:

\use schema_name
The \use command requires a global development session to be active. The \use command sets the current schema to the specified schema_name and updates the db variable to the object that represents the selected schema.

History Command
The \history command lists the commands you have issued previously in MySQL Shell. Issuing \history shows history entries in the order that they were issued with their history entry number, which can be used with the \history delete entry_number command.

The \history command provides the following options:

Use \history save to save the history manually.

Use \history delete entrynumber to delete the individual history entry with the given number.

Use \history delete firstnumber-lastnumber to delete history entries within the range of the given entry numbers. If lastnumber goes past the last found history entry number, history entries are deleted up to and including the last entry.

Use \history delete number- to delete the history entries from number up to and including the last entry.

Use \history delete -number to delete the specified number of history entries starting with the last entry and working back. For example, \history delete -10 deletes the last 10 history entries.

Use \history clear to delete the entire history.

The history is not saved between sessions by default, so when you exit MySQL Shell the history of what you issued during the current session is lost. If you want to keep the history across sessions, enable the MySQL Shell history.autoSave option. For more information, see Section 5.5, “Code History”.

Rehash Command
When you have disabled the autocomplete name cache feature, use the \rehash command to manually update the cache. For example, after you load a new schema by issuing the \use schema command, issue \rehash to update the autocomplete name cache. After this autocomplete is aware of the names used in the database, and you can autocomplete text such as table names and so on. See Section 5.3, “Code Autocompletion”.

Option Command
The \option command enables you to query and change MySQL Shell configuration options in all modes. You can use the \option command to list the configuration options that have been set and show how their value was last changed. You can also use it to set and unset options, either for the session, or persistently in the MySQL Shell configuration file. For instructions and a list of the configuration options, see Section 13.4, “Configuring MySQL Shell Options”.

Pager Commands
You can configure MySQL Shell to use an external pager to read long onscreen output, such as the online help or the results of SQL queries. See Section 4.6, “Using a Pager”.

Show and Watch Commands
The \show command runs the named report, which can be either a built-in MySQL Shell report or a user-defined report that has been registered with MySQL Shell. You can specify the standard options for the command, and any options or additional arguments that the report supports. The \watch command runs a report in the same way as the \show command, but then refreshes the results at regular intervals until you cancel the command using Ctrl + C. For instructions, see Section 10.1.5, “Running MySQL Shell Reports”.

Edit Command
The \edit (\e) command opens a command in the default system editor for editing, then presents the edited command in MySQL Shell for execution. The command can also be invoked using the key combination Ctrl-X Ctrl-E. For details, see Section 5.4, “Editing Code”.

System Command
The \system (\!) command runs the operating system command that you specify as an argument to the command, then displays the output from the command in MySQL Shell. MySQL Shell returns an error if it was unable to execute the command. The output from the command is returned as given by the operating system, and is not processed by MySQL Shell's JSON wrapping function or by any external pager tool that you have specified to display output.

---

### How to coonect to shell

`\connect root@localhost:3306` then put password
`\use dangote_group_of_companies;` to start using this db

## Connecting MySQL database to Power BI

Note: You need to have ``MySQL Connector net` for it to work

1. Click MySQL as a way to import from Power BI
2. Server and Database will show and advance, type in the details e.g

```
Server: 127.0.0.1:3306
Database: dangote_group_of_companies
```

3. Choose the way to access the databse e.g using your PC credentilas or the database own.

When running MySQL Shell in interactive mode, activate a specific language by entering the commands: `\sql, \js, \py`

When running MySQL Shell in batch mode, activate a specific language by passing any of these command-line options: `--js, --py or --sql`. The default mode if none is specified is JavaScript.

Use MySQL Shell to execute the content of the file code.sql as SQL.

`$> mysqlsh --sql < code.sql`
Use MySQL Shell to execute the content of the file code.js as JavaScript code.

`$> mysqlsh < code.js`
Use MySQL Shell to execute the content of the file code.py as Python code.

`$> mysqlsh --py < code.py`

E.g

1. open cmd, move to where your files are,
2. then type `mysqlsh` to launch mysql shell to exit use `\exit` or `\quit`
3. connect and use the database of choice
4. run the script e.g `SOURCE test.sql;`, note your file path

    OR

5. Type in cmd `mysql -u yourUsername -p` if your usename is root e.g `mysql -u root -p`
6. then put password and mysql is ready.
7. `show databases;` `use databasename` `show tables;` ` SELECT * FROM employees;`
