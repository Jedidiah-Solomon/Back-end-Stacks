-- Active: 1720695329631@@127.0.0.1@3306@dangote_group_of_companies
-- Active: 1720695329631@@127.0.0.1@3306

 CREATE DATABASE Dangote_Group_of_Companies
    DEFAULT CHARACTER SET = 'utf8mb4';

USE dangote_group_of_companies;


CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Gender ENUM("Male", "Female", "Other"),
    DepartmentID INT,
    Position VARCHAR(50),
    Salary DECIMAL(10, 2),
    DOB DATE
);




CREATE TABLE Departments (
    DepartmentID INT AUTO_INCREMENT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

-- or

CREATE TABLE `Departments` (
    DepartmentID INT AUTO_INCREMENT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

CREATE TABLE Projects (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectName VARCHAR(50) NOT NULL,
    DepartmentID INT NOT NULL,
    Budget DECIMAL(10, 2) NOT NULL
);


INSERT INTO Departments (DepartmentName) VALUES ('HR'), ('Finance'), ('Engineering');

INSERT INTO Employees (FirstName, LastName, Gender, DepartmentID, Position, Salary, DOB) 
VALUES
('John', 'Doe', 'Male', 1, 'HR Manager', 75000, '2003-10-24'),
('Jane', 'Smith', 'Female', 2, 'Accountant', 65000, '2003-10-30'),
('Mike', 'Johnson', 'Male', 3, 'Engineer', 85000, '4-13-2023');


INSERT INTO Employees (FirstName, LastName, Gender, DepartmentID, Position, Salary) VALUES
('John', 'Doe', 'Male', 1, 'HR Manager', 75000),
('Jane', 'Smith', 'Female', 2, 'Accountant', 65000),
('Mike', 'Johnson', 'Bi-sexual', 3, 'Engineer', 85000);

INSERT INTO Employees (FirstName, LastName, Position, Salary) VALUES
('Alice', 'Brown', 'HR Specialist', 55000),
('Bob', 'White', 'Financial Analyst', 62000),
('Carol', 'Davis', 'Software Engineer', 90000),
('Dave', 'Miller', 'Senior Engineer', 95000),
('Eve', 'Wilson', 'Recruiter', 48000);

UPDATE Employees
SET DepartmentID = 2
WHERE FirstName = 'Dave' AND LastName = 'Miller';


INSERT INTO Projects (ProjectName, DepartmentID, Budget) VALUES
('Employee Satisfaction Survey', 1, 5000),
('Annual Financial Audit', 2, 20000),
('Product Development', 3, 100000);


ALTER TABLE Employees
CHANGE FirstName First_Name VARCHAR(50);

--OR

ALTER TABLE Employees
RENAME COLUMN FirstName TO First_Name;

DROP TABLE projects;

DROP DATABASE Dangote_Group_of_Company;


SELECT * FROM employees;
SELECT * FROM departments;
SELECT * FROM projects;

SELECT 
    EmployeeID, 
    FirstName, 
    LastName, 
    Gender, 
    DepartmentID, 
    Position, 
    Salary, 
    DATE_FORMAT(DOB, '%a %e %b, %Y') AS FormattedDOB
FROM 
    Employees;

-- DATE_FORMAT(DOB, '%a %e %b, %Y'): This part of the query uses the DATE_FORMAT() function 
-- to format the DOB column (DATE data type) into a custom string format.
-- %a: Abbreviated weekday name (Sun, Mon, Tue, etc.)
-- %e: Day of the month without leading zeros (1 to 31)
-- %b: Abbreviated month name (Jan, Feb, Mar, etc.)
-- %Y: Four-digit year (e.g., 2024)

-- Date Formats:
-- Year:

-- %Y: Four-digit year (e.g., 2024)
-- %y: Two-digit year (e.g., 24)
-- Month:

-- %m: Two-digit month (01 to 12)
-- %b: Abbreviated month name (Jan, Feb, ..., Dec)
-- %M: Full month name (January, February, ..., December)
-- Day:

-- %d: Two-digit day of the month (01 to 31)
-- %e: Day of the month without leading zeros (1 to 31)
-- %D: Day of the month with suffix (1st, 2nd, ..., 31st)
-- Weekday:

-- %a: Abbreviated weekday name (Sun, Mon, ..., Sat)
-- %W: Full weekday name (Sunday, Monday, ..., Saturday)
-- Time:

-- %H: Two-digit hour (00 to 23)
-- %h: Two-digit hour (01 to 12)
-- %i: Two-digit minutes (00 to 59)
-- %s: Two-digit seconds (00 to 59)
-- %p: AM or PM (for use with %h)
-- Combined:

-- %Y-%m-%d: Date in YYYY-MM-DD format
-- %Y-%m-%d %H:%i:%s: Date and time in YYYY-MM-DD HH:MM
-- format