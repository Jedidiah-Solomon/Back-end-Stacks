const express = require("express");
bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();

const Port = process.env.PORT || 3000;

const users = [];

app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.post("/users", async (req, res) => {
    try {
        // Generate a salt with the default rounds (10)
        const salt = await bcrypt.genSalt();
        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        console.log(`Generated salt is: ${salt}`);
        console.log(`Hashed Password is: ${hashedPassword}`);

        // Create a new user object
        const user = { name: req.body.name, password: hashedPassword };

        users.push(user);

        res.status(201).send("User created successfully!!!");
        console.log(users);
    } catch (error) {
        res.status(500).send("Server error dear user!");
    }
});

app.post("/users/login", async (req, res) => {
    try {
        // Find the user by name
        const user = users.find((user) => user.name === req.body.name);

        // If user is not found, send a 400 status with a message
        if (user == null) {
            return res.status(400).send("User not found!!!");
        }

        // Compare the provided password with the stored hashed password
        if (await bcrypt.compare(req.body.password, user.password)) {
            // If the passwords match, send a 200 status with a success message
            res.status(200).send("User Logged in!!!");
        } else {
            // If the passwords do not match, send a 403 (Forbidden) status with a message
            res.status(403).send("Not allowed");
        }
    } catch (error) {
        // Handle any errors and send a 500 status with an error message
        res.status(500).send("Internal error");
    }
});

app.listen(Port, () => {
    console.log(`Server running at port ${Port}`);
});
