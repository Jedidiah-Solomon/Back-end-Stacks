const express = require("express");
const path = require("path");
const router = express.Router();

// Define routes
router.get("/deleteUser", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/delete.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/login.html"));
});

router.get("/news", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/news.html"));
});

router.get("/updateUser", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/update.html"));
});

// Export the router
module.exports = router;
