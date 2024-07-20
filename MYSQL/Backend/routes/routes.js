const express = require("express");
const path = require("path");
const router = express.Router();
const db = require("../db/database");

router.get("/api/products", (req, res) => {
    const query = `
        SELECT products.id, products.name, products.price, COUNT(orders.id) AS orders
        FROM products
        LEFT JOIN orders ON products.id = orders.product_id
        GROUP BY products.id
    `;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
        // console.log(results);
    });
});

// Serve the product details page
router.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Frontend/pages/products.html"));
});

router.get("/products-details", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../Frontend/pages/products-details.html")
    );
});

// Serve the order summary page
router.get("/order-summary", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../Frontend/pages/order-summary.html")
    );
});

// API to get all product details
router.get("/api/product-details", (req, res) => {
    const query = "SELECT * FROM products";
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
        // console.log(results);
        // console.log(results[2]);
        // console.log(results[2].name);
    });
});

// API to get order summary
router.get("/api/order-summary", (req, res) => {
    const query = `
        SELECT 
            users.name AS user_name, 
            products.name AS product_name, 
            orders.quantity, 
            orders.order_date,
            products.price AS product_price,
            (orders.quantity * products.price) AS total_amount
        FROM orders
        JOIN users ON orders.user_id = users.id
        JOIN products ON orders.product_id = products.id
        ORDER BY orders.order_date DESC, orders.quantity DESC
    `;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
