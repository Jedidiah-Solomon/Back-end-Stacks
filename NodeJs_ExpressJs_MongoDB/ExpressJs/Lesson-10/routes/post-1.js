import express from "express";
const router = express.Router();

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
];

// // Get  all posts | http://localhost:8080/api/posts , http://localhost:8080/api/posts/?limit=2
router.get("/", (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
});

// Get single post | http://localhost:8080/api/posts/1
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const filteredPosts = posts.filter((post) => post.id === id);

    if (filteredPosts.length > 0) {
        res.status(200).json(filteredPosts[0]);
    } else {
        res.status(404).json({
            message: `A post with id: ${id} was not found. Please try again!`,
        });
    }
});

// Create New Post
router.post("/", (req, res) => {
    console.log(req.body); // Log the request body

    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if (!newPost.title) {
        return res.status(400).json({ msg: "Please include a title" });
    }

    posts.push(newPost);
    res.status(201).json(posts);
});

// Update Post
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(400).json({ msg: `No post found with id ${id}` });
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});

// Delete Post
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(400).json({ msg: `No post found with id ${id}` });
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

export default router; //ECMASCRIPT

// module.exports = router; //Common Js
