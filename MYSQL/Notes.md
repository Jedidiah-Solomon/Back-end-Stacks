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
