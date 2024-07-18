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
