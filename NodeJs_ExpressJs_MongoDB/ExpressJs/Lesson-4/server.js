const express = require("express");
const cors = require("cors");

const app = express();

// Basic CORS configuration
const corsOptions = {
    origin: "http://example.com", // Allow only this origin to access the server or use * to allow all (not recommended)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
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
