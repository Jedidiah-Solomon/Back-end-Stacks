SELECT * 
FROM student_biodata;

SELECT * 
FROM bathphage_ict_center.student_biodata;

-- Best to separate interest
SELECT first_name 
FROM bathphage_ict_center.student_biodata;

-- Custom column
SELECT first_name, 
last_name,
age,
age + 10
FROM bathphage_ict_center.student_biodata;

SELECT first_name, 
last_name,
age,
25 * 2
FROM bathphage_ict_center.student_biodata;

-- PEMDAS = Parenthesis, Exponent, Multiplication, Division, Addition, Subtraction
SELECT first_name, 
last_name,
age,
(age + 10) * 2
FROM bathphage_ict_center.student_biodata;

SELECT DISTINCT gender 
FROM bathphage_ict_center.student_biodata;

SELECT DISTINCT first_name, gender 
FROM bathphage_ict_center.student_biodata;

SELECT *
FROM bathphage_ict_center.student_biodata
WHERE first_name = "John" ;

SELECT *
FROM bathphage_ict_center.student_biodata
WHERE salary > 5000;

SELECT *
FROM bathphage_ict_center.student_biodata
WHERE salary >= 5000;

SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE gender != "female";

-- Date format is yyyy-mm-dd
SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE birth_date = "2024-06-30";

SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE birth_date >  "2004-04-01"
AND gender = "male";


SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE birth_date >  "2004-04-01"
OR gender = "male";

SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE (first_name = "John" AND age = 20) OR age > 55;

-- Like Statement - to search for a nearly match but not exact

SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE first_name LIKE "Ja%";

SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE first_name LIKE "%m%";

-- 2 underscore means two characters
-- Find a firstname with J as 1st letter and any two letter no more no less
SELECT  * 
FROM bathphage_ict_center.student_biodata
WHERE first_name LIKE "J__";

-- We use percent sign and underscore
-- % means anything, _ means a specific value

-- LIMIT
-- This query retrieves all columns from the student_biodata table in the bathphage_ict_center database. It orders the results by age in descending order and limits the output to the first 3 rows. This means you'll get the top 3 oldest students.

SELECT * 
FROM bathphage_ict_center.student_biodata
ORDER BY age DESC,
LIMIT 3;


-- -- This query also retrieves all columns from the student_biodata table in the bathphage_ict_center database, ordered by age in descending order. However, the LIMIT 3, 1 clause works differently:

-- LIMIT 3 specifies the offset, meaning it skips the first 3 rows.
-- 1 specifies the number of rows to return after the offset.
-- Effectively, this query retrieves the 4th row in the ordered list (the student who is the 4th oldest). The result will be a single row, the one immediately following the top 3 oldest students.
SELECT * 
FROM bathphage_ict_center.student_biodata
ORDER BY age DESC
LIMIT 3, 1;

SELECT * FROM customers LIMIT 2, 5; 
-- same as
SELECT * FROM customers LIMIT 5 OFFSET 2;

-- Query Results
-- Executing the query would yield the following results:

-- gender	AVG(age)
-- Female	20.5
-- Male	20.6

-- Group Rows: The GROUP BY clause groups the rows into sets where each set has the same value in the gender column. In this example, there are two groups: one for Male and one for Female.

-- Group 1 (Male): Contains all rows where gender is 'Male'.
-- Group 2 (Female): Contains all rows where gender is 'Female'.

SELECT gender, AVG(age) 
FROM bathphage_ict_center.student_biodata
GROUP BY gender;


-- aliasing

-- Aliasing in SQL is the process of giving a table or a column a temporary name. This is useful for making column names more readable, for shortening long table names, or for making column names in the result set easier to understand. Aliases are created using the AS keyword, though the keyword is optional in some databases.
SELECT gender, AVG(age) AS average_age
FROM student_biodata
GROUP BY gender;

SELECT gender, AVG(age) AS average_age
FROM student_biodata
GROUP BY gender
HAVING average_age > 20.5;

SELECT MAX(age) AS oldest_student_age
FROM student_biodata;

SELECT MIN(age) AS youngest_student_age
FROM student_biodata;

SELECT COUNT(*) AS total_students
FROM student_biodata;


SELECT SUM(grade) AS total_grades
FROM student_grades;


SELECT 
    MAX(score) AS max_score,
    MIN(score) AS min_score,
    COUNT(*) AS total_scores,
    SUM(score) AS total_score_sum,
    AVG(score) AS average_score
FROM student_scores;

--without aliasing
SELECT sci.id, sci.student_id, sb.first_name, sb.last_name, sci.email, sci.teacher, sci.learning_type
FROM student_class_info sci
JOIN student_biodata sb ON sci.student_id = sb.student_id;

-- with aliasing
SELECT sci.id, sci.student_id, sb.first_name, sb.last_name, sci.email, sci.teacher, sci.learning_type
FROM student_class_info AS sci
JOIN student_biodata AS sb ON sci.student_id = sb.student_id;
-- Both gives same result in mysql


DELETE FROM customers WHERE address = 'Mountain 21';

DROP TABLE customers;

UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345';