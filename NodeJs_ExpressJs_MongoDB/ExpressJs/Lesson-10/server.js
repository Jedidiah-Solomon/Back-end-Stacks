import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import pages from "./routes/pages.js";

const Port = process.env.PORT || 3000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// Setup Static Route
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);
app.use("/", pages);

// Error-handling middleware
app.use(errorHandler);

// 404 Error Handling Middleware
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "public", "pages", "404.html")
    );
});

app.listen(Port, () => {
    console.log(`Server running at port ${Port}`);
});
