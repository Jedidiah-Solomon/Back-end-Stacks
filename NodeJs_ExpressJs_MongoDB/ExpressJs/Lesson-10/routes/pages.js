import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Home Route | http://localhost:8080
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public", "index.html"));
});

// AboutUs Route | http://localhost:8080/aboutUs
router.get("/aboutUs", (req, res) => {
    res.status(200).sendFile(
        path.join(__dirname, "../public", "pages", "aboutUs.html")
    );
});

export default router;
