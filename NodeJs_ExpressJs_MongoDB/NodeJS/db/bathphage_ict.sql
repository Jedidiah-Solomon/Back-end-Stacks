-- Drop the database if it exists
DROP DATABASE IF EXISTS `Bathphage_ICT_Center`;

-- Create the database
CREATE DATABASE `Bathphage_ICT_Center`;
USE `Bathphage_ICT_Center`;

-- Create the student_biodata table
CREATE TABLE student_biodata (
  student_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  age INT,
  gender VARCHAR(10),
  birth_date DATE,
  PRIMARY KEY (student_id)
);

-- Insert data into the student_biodata table
INSERT INTO student_biodata (first_name, last_name, age, gender, birth_date)
VALUES
('John', 'Doe', 20, 'Male', '2004-05-10'),
('Jane', 'Smith', 22, 'Female', '2002-09-15'),
('Michael', 'Johnson', 21, 'Male', '2003-03-20'),
('Emily', 'Brown', 19, 'Female', '2005-01-25'),
('William', 'Davis', 20, 'Male', '2004-07-12'),
('Sophia', 'Martinez', 21, 'Female', '2003-11-08'),
('James', 'Miller', 22, 'Male', '2002-04-30'),
('Olivia', 'Wilson', 19, 'Female', '2005-08-18'),
('Alexander', 'Moore', 20, 'Male', '2004-02-14'),
('Isabella', 'Taylor', 21, 'Female', '2003-06-05');

-- Create the student_class_info table with additional columns
CREATE TABLE student_class_info (
  id INT NOT NULL AUTO_INCREMENT,
  student_id INT NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  teacher VARCHAR(50),
  learning_type ENUM('online', 'onsite', 'virtual'),
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES student_biodata(student_id)
);

-- Insert data into the student_class_info table
INSERT INTO student_class_info (student_id, first_name, last_name, email, teacher, learning_type)
VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'Mr. Smith', 'online'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'Ms. Johnson', 'onsite'),
(3, 'Michael', 'Johnson', 'michael.johnson@example.com', 'Mr. Brown', 'virtual'),
(4, 'Emily', 'Brown', 'emily.brown@example.com', 'Ms. Martinez', 'online'),
(5, 'William', 'Davis', 'william.davis@example.com', 'Mr. Miller', 'onsite'),
(6, 'Sophia', 'Martinez', 'sophia.martinez@example.com', 'Ms. Wilson', 'virtual'),
(7, 'James', 'Miller', 'james.miller@example.com', 'Mr. Moore', 'online'),
(8, 'Olivia', 'Wilson', 'olivia.wilson@example.com', 'Ms. Taylor', 'onsite'),
(9, 'Alexander', 'Moore', 'alexander.moore@example.com', 'Mr. Doe', 'virtual'),
(10, 'Isabella', 'Taylor', 'isabella.taylor@example.com', 'Ms. Doe', 'online');


-- Create the bathphage_departments table
CREATE TABLE bathphage_departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (department_id)
);

-- Insert data into the bathphage_departments table
INSERT INTO bathphage_departments (department_name)
VALUES
('Web Development'),
('Web Design'),
('Data Analysis'),
('Digital Marketing'),
('AI and Automation'),
('Basic Digital Literacy');
