import express from "express";

const router = express.Router();

// Home Route
router.get("/", (req, res) => {
    const data = {
        title: "Home Page",
        message: "Thank you for learning  EJS!",
        user: { name: "Bathphage ICT Center" }, // Include user object here
    };
    res.status(200).render("index", data); // index here = index.ejs in views directory
});

// AboutUs Route
router.get("/aboutUs", (req, res) => {
    const data = {
        title: "About Page",
        message: "Learn more about EJS.",
        user: { name: "Bathphage ICT Center" },
    };
    res.status(200).render("about", data);
});

export default router;
