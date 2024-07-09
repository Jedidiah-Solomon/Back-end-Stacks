if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const bcrypt = require("bcryptjs");
const colors = require("colors");
const connection = require("./db");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

const initializePassport = require("./passport-config");

initializePassport(
    passport,
    (email) => {
        connection.query(
            "SELECT * FROM customers WHERE email = ?",
            [email],
            (err, results) => {
                if (err) throw err;
                return results[0];
            }
        );
    },
    (id) => {
        connection.query(
            "SELECT * FROM customers WHERE id = ?",
            [id],
            (err, results) => {
                if (err) throw err;
                return results[0];
            }
        );
    }
);

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// Serve static files
app.use(express.static("public"));

// Template Engine
app.set("view engine", "ejs");

// Routes
app.get("/", checkAuthenticated, (req, res) => {
    res.render("index", { username: req.user.username });
});

// Login Route for Get
app.get("/login", checkNotAuthenticated, (req, res) => {
    res.render("login");
});

// Login Route for Post
app.post(
    "/login",
    checkNotAuthenticated,
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
    }),
    (req, res) => {
        // This function will execute if authentication fails
        req.flash("error", "Invalid email or password");
        res.redirect("/login");
    }
);

// Register Route for Get
app.get("/register", checkNotAuthenticated, (req, res) => {
    res.render("register");
});

// Register Route for Post
app.post("/register", checkNotAuthenticated, async (req, res) => {
    const { username, password, email } = req.body;
    try {
        connection.query(
            "SELECT * FROM customers WHERE email = ?",
            [email],
            async (err, results) => {
                if (err) throw err;
                if (results.length > 0) {
                    return res
                        .status(400)
                        .json({ message: "Email already in use" });
                }

                const hashedPassword = await bcrypt.hash(password, 10);
                connection.query(
                    "INSERT INTO customers (username, password, email) VALUES (?, ?, ?)",
                    [username, hashedPassword, email],
                    (err, results) => {
                        if (err) throw err;
                        console.log(
                            "POST /register - Customer registered successfully"
                                .green
                        );
                        res.redirect("/login");
                    }
                );
            }
        );
    } catch (error) {
        console.error("POST /register - Server error".red, error);
        res.redirect("/register");
    }
});

// Logout Route
app.delete("/logout", (req, res) => {
    req.logOut((err) => {
        if (err) {
            console.error("Error logging out:", err);
            return next(err); // Pass error to the next middleware
        }
        res.redirect("/login");
    });
});

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
