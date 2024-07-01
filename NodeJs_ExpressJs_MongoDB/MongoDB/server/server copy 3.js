const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB using Mongoose
mongoose
    .connect(process.env.MONGODB_URI_ADMIN)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a schema and model
const studentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "signup.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "login.html"));
});

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    console.log("Received signup request:", username, email, password);

    try {
        // Check if email already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).send("Email already exists");
        }

        // If email does not exist, proceed with signup
        const newStudent = new Student({ username, email, password });
        const result = await newStudent.save();
        console.log("Signup data inserted successfully:", result);
        res.send("Signup successful!");
    } catch (err) {
        console.error("Error inserting document:", err);
        res.status(500).send("Error inserting document into database");
    }
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(`Login - Email: ${email}, Password: ${password}`);
    res.send("Login successful!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
