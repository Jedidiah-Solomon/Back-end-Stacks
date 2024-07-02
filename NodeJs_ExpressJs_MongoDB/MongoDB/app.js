const express = require("express");
const { ObjectId } = require("mongodb");
const { getDb, connectToDb } = require("./dbs/db");

// Initialize the app & middleware
const app = express();

// Database connection
let db;

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log("App listening on port 3000");
        });
        db = getDb();
    }
});

// Route to get all students, sorted by first name
app.get("/students", (req, res) => {
    let students = [];

    db.collection("students")
        .find()
        .sort({ firstName: 1 })
        .forEach((student) => students.push(student))
        .then(() => {
            res.status(200).json(students);
        })
        .catch((err) => {
            res.status(500).json({ error: "Could not fetch the documents" });
        });
});

// Route to get a student by ID
app.get("/students/:id", (req, res) => {
    const id = req.params.id; //// Extract the ID from the URL parameters http://localhost:3000/students/<id> e.g //http://localhost:3000/students/6682c18e58f397a347a334d7

    if (ObjectId.isValid(id)) {
        // Check if the ID is a valid MongoDB ObjectId
        db.collection("students")
            .findOne({ _id: new ObjectId(id) })
            .then((doc) => {
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ error: "Document not found" });
                }
            })
            .catch((err) => {
                res.status(500).json({ error: "Could not fetch the document" });
            });
    } else {
        res.status(400).json({ error: "Invalid ID format" });
    }
});

// Explanation:
// express(): Initializes the Express application.
// connectToDb(cb): Calls the function from db.js to connect to the database.
// Callback cb: If there is no error (!err), the server starts listening on port 3000 and db is assigned the database connection.
// Route /students: Defines a GET endpoint that returns a welcome message as JSON.
