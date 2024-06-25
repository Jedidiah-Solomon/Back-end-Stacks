const express = require("express");
const cors = require("cors");
const app = express();

// List of allowed origins
const allowedOrigins = [
    "http://example.com",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    // Add any other origins you want to allow
];

// CORS options with a function to check the origin
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin, like mobile apps or curl requests
        if (!origin) {
            return callback(null, true);
        }
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Example route
app.get("/api/data", (req, res) => {
    res.json({ message: "This is a CORS-enabled response!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
