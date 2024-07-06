import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import pages from "./routes/pages.js";
import logger from "./middleware/logger.js";

const app = express();
dotenv.config();
const Port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", pages); // Use the pages routes

app.listen(Port, () => {
    console.log(`Server running at port ${Port}`);
});
