import express from "express";
const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to create a user
app.post("/users", (req, res) => {
    console.log("Request body:", req.body);
    const { name, age, email } = req.body;
    // Here you can process the request body data
    res.status(201).json({
        message: "User created successfully",
        data: req.body,
    });
});

// PUT endpoint to update a user
app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    console.log(`Updating user with ID ${userId}. New data:`, req.body);
    // Here you can update the user data based on req.body
    res.status(200).json({
        message: `User with ID ${userId} updated`,
        data: req.body,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

/*
Usage:

Send a POST request to http://localhost:8000/users with a JSON body containing name, age, and email fields to see the request body logged and processed.
{
    "name": "Jedynwa",
    "age": 20,
    "email":"jedy@gmail.com"
}

Send a PUT request to http://localhost:8000/users/:id (replace :id with a valid user ID) with a JSON body to update the user's data and see the updated request body logged.
*/
