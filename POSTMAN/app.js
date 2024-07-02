const express = require("express");
const app = express();
const PORT = 5000; // You can change the port as needed

// Middleware to parse JSON bodies
app.use(express.json());

// Mock data for simplicity (normally this would come from a database)
let books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
];

// GET all books e.g http://localhost:5000/books
app.get("/books", (req, res) => {
    res.json(books);
});

// GET a specific book by ID e.g http://localhost:5000/books/2
app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((book) => book.id === id);
    if (book) {
        res.json(book);
    } else {
        // res.status(404).json({ error: "Book not found" });
        res.status(404).send("Book not found");
    }
});

// POST a new book
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT (replace) a book by ID
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
        books[index] = { id, title, author };
        res.json(books[index]);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// PATCH (update) a book by ID
app.patch("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
        if (title) books[index].title = title;
        if (author) books[index].author = author;
        res.json(books[index]);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// DELETE a book by ID
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
        const deletedBook = books.splice(index, 1)[0];
        res.json(deletedBook);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
