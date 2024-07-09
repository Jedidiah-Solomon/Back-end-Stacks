const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("./db");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors()); // Use cors middleware to enable CORS for all routes
app.use(cookieParser());

// app.use(
//     cors({
//         origin: "*",
//         methods: ["GET", "POST"],
//         allowedHeaders: ["Content-Type", "Authorization"],
//     })
// );

// -------------------------------------------Routes-------------------------------------
// Serve home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Serve signup page
app.get("/signup.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "signup.html"));
});

// Serve login page
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Signup route
app.post("/signup", async (req, res) => {
    const {
        username,
        password,
        email,
        course_type,
        state_of_origin,
        phone_no,
    } = req.body;
    try {
        // Check if email already exists
        connection.query(
            "SELECT * FROM users WHERE email = ?",
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
                    "INSERT INTO users (username, password, email, course_type, state_of_origin, phone_no) VALUES (?, ?, ?, ?, ?, ?)",
                    [
                        username,
                        hashedPassword,
                        email,
                        course_type,
                        state_of_origin,
                        phone_no,
                    ],
                    (err, results) => {
                        if (err) throw err;
                        res.status(201).json({
                            message: "User registered successfully",
                        });
                    }
                );
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, results) => {
            if (err) return res.status(500).json({ message: "Server error" });
            if (results.length === 0) {
                return res.status(400).json({ message: "User not found" });
            } else {
                const user = results[0];
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    const accessToken = jwt.sign(
                        { id: user.id, username: user.username },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: "2m" } // { expiresIn: "3h" } for 3h, 2m = 2 mins
                    );
                    res.cookie("accessToken", accessToken, {
                        httpOnly: true,
                        maxAge: 2 * 60 * 1000, // 2 hours = 2 * 60 * 60 * 1000, 2 * 60 * 1000 = 2mins
                        sameSite: "Strict", // or 'Lax', or 'None' if you need cross-site usage
                    });
                    return res.json({ message: "Login successful" });
                } else {
                    return res
                        .status(401)
                        .json({ message: "Incorrect password" });
                }
            }
        }
    );
});

// Protected route
app.get("/classroom.html", authenticateToken, (req, res) => {
    console.log("Headers received:", req.headers);
    res.sendFile(path.join(__dirname, "views", "classroom.html"));
});

// -------------------------------------------Routes Ends -------------------------------------

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    const token = req.cookies.accessToken;
    console.log("Token from cookie:", token); // Log the extracted token

    if (!token) {
        console.log("No token provided, Please login again for a new session!");
        return res.status(401).json({
            message: "No token provided, Please login again for a new session!",
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error("JWT verification error:", err);
            return res
                .status(403)
                .json({ message: "Token verification failed" }); // 403 for token expired or invalid
        }
        req.user = user;
        console.log("Authenticated user:", user);
        next();
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
