 CREATE DATABASE cookies_sales_records
    DEFAULT CHARACTER SET = 'utf8mb4';

USE cookies_sales_records;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO users (name, email, age) VALUES 
('John Doe', 'john.doe@example.com', 25),
('Jane Smith', 'jane.smith@example.com', 30),
('Michael Brown', 'michael.brown@example.com', 35),
('Emily Davis', 'emily.davis@example.com', 28),
('Daniel Wilson', 'daniel.wilson@example.com', 32),
('Jessica Johnson', 'jessica.johnson@example.com', 27),
('Matthew White', 'matthew.white@example.com', 29),
('Laura Harris', 'laura.harris@example.com', 31),
('David Martin', 'david.martin@example.com', 24),
('Sarah Lee', 'sarah.lee@example.com', 26);


INSERT INTO products (name, price, quantity) VALUES 
('Laptop', 1000.00, 50),
('Smartphone', 500.00, 100),
('Tablet', 300.00, 70),
('Headphones', 100.00, 200),
('Smartwatch', 200.00, 150);

INSERT INTO orders (user_id, product_id, quantity, order_date) VALUES 
(1, 1, 1, '2023-01-01'),
(2, 2, 2, '2023-01-02'),
(3, 3, 1, '2023-01-03'),
(4, 4, 3, '2023-01-04'),
(5, 5, 2, '2023-01-05'),
(6, 1, 1, '2023-01-06'),
(7, 2, 2, '2023-01-07'),
(8, 3, 3, '2023-01-08'),
(9, 4, 1, '2023-01-09'),
(10, 5, 2, '2023-01-10'),
(1, 2, 1, '2023-01-11'),
(2, 3, 2, '2023-01-12'),
(3, 4, 3, '2023-01-13'),
(4, 5, 1, '2023-01-14'),
(5, 1, 2, '2023-01-15'),
(6, 2, 3, '2023-01-16'),
(7, 3, 1, '2023-01-17'),
(8, 4, 2, '2023-01-18'),
(9, 5, 3, '2023-01-19'),
(10, 1, 1, '2023-01-20');
