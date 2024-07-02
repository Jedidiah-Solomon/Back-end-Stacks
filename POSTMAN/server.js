const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Initialize books array from JSON file
let books = require("./bookshop.json");
let secretId = books.length; // Initialize secret ID counter based on existing books

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

// Add Book Page
app.get("/addbook", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "addBook.html"));
});

// Add Book Page
app.get("/checkbook", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "checkbook.html"));
});

// GET all books
app.get("/books", (req, res) => {
    res.status(200).json(books);
});

// Route to view all books as HTML
app.get("/view-all-books", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "allbooks.html"));
});

// POST a new book
app.post("/books", (req, res) => {
    const { custom_id, title, author, imgUrl, publication, genres } = req.body;

    // Increment secret ID
    secretId++;

    const newBook = {
        id: secretId, // Secret ID auto-incremented by the server
        custom_id, // Custom ID provided by bookshop staff
        title,
        author,
        imgUrl,
        publication,
        genres,
    };

    books.push(newBook);

    // Write updated bookshop.json file
    fs.writeFileSync("./bookshop.json", JSON.stringify(books, null, 2));

    res.status(201).json(newBook);
});

// Search books by genre, author, year, or ID
app.get("/books/search", (req, res) => {
    const { genre, author, year, custom_id } = req.query;
    let filteredBooks = books;

    if (genre) {
        filteredBooks = filteredBooks.filter((book) =>
            book.genres.includes(genre)
        );
    }

    if (author) {
        filteredBooks = filteredBooks.filter(
            (book) => book.author.toLowerCase() === author.toLowerCase()
        );
    }

    if (year) {
        filteredBooks = filteredBooks.filter(
            (book) => book.publication.year == year
        );
    }

    if (custom_id) {
        filteredBooks = filteredBooks.filter(
            (book) => book.custom_id == custom_id
        );
    }

    res.status(200).json(filteredBooks);
});

// Server listening
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
