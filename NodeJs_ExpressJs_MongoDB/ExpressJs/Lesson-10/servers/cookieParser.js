import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse JSON bodies and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route to serve the HTML file
app.get("/home", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "cookie.html"));
});

// Route to log current cookies
app.get("/cookiesByMe", (req, res) => {
    console.log("Cookies:", req.cookies);
    res.send("Check the console for cookies");
});

// Route to handle setting a new cookie
app.post("/setCookie", (req, res) => {
    const { cookieName, cookieValue } = req.body;

    // Log cookies before setting the new cookie
    console.log("Cookies Now (before response):", req.cookies);

    // Set the new cookie
    res.cookie(cookieName, cookieValue);

    // Log cookies after setting the new cookie (should be the same as before)
    console.log("Cookies Now (after response):", req.cookies);

    // Send the response back to the client
    res.send(`Cookie set: ${cookieName}=${cookieValue}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
