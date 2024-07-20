# MySQL Express.js Products

## Overview

This project is a simple web application built with Express.js to retrieve and display data from a MySQL database. The application fetches product and order details from the database and displays them in a user-friendly interface.

## Features

-   Display a list of products.
-   Display order summaries, including total ordered products and total amount.
-   Responsive design with custom styling.

## Project Structure

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
└── .gitignore
```

## Installation

### Prerequisites

-   Node.js
-   MySQL

### Steps

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd my-project
    ```

2. Navigate to the `Backend` directory:

    ```sh
    cd Backend
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Set up the `.env` file with your database credentials:

    ```sh
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=xxxxx
    DB_NAME=cookies_sales_records
    PORT=5000
    ```

5. Start the server:
    ```sh
    npm run dev
    ```

## Usage

-   Navigate to `http://localhost:5000` to view the product listings.
-   Navigate to `http://localhost:5000/products` to view detailed product orders.

## API Endpoints

-   **GET `/api/products`**: Fetches a list of products.
-   **GET `/api/order-summary`**: Fetches a summary of orders including user name, product name, quantity, order date, product price, and total amount.

## Database Schema

### Products Table

```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL
);

```
