-- Inner Join
-- Retrieve employee details along with their department names.
SELECT e.FirstName, e.LastName, d.DepartmentName, e.Position
FROM Employees e
INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID;


-- Left Join 
-- Retrieve all employees and their department names, including those who are not assigned to any department.
SELECT e.FirstName, e.LastName, d.DepartmentName, e.Position
FROM Employees e
LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;

-- Right Join 
-- Retrieve all departments and the employees within those departments, including departments with no employees.
SELECT e.FirstName, e.LastName, d.DepartmentName, e.Position
FROM Employees e
RIGHT JOIN Departments d ON e.DepartmentID = d.DepartmentID;

-- Cross Join
-- Create a Cartesian product of employees and projects, showing every combination of employee and project.
SELECT e.FirstName, e.LastName, p.ProjectName
FROM Employees e
CROSS JOIN Projects p;





-- Different Types of SQL JOINs
-- Here are the different types of the JOINs in SQL:

-- (INNER) JOIN: Returns records that have matching values in both tables
-- LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
-- RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
-- FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

-- In a CROSS JOIN, every row from the first table (Employees) is combined with every row from the second table (Projects). This results 
-- in a Cartesian product of the two tables, which means if you have 5 employees and 3 projects, you'll get 15 rows in total (5 * 3).