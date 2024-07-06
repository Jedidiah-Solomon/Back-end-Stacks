import express from "express";
import {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} from "../controllers/postControllers.js";
const router = express.Router();

// // Get  all posts | http://localhost:8080/api/posts , http://localhost:8080/api/posts/?limit=2
router.get("/", getPosts);

// Get single post | http://localhost:8080/api/posts/1
router.get("/:id", getPost);

// Create New Post
router.post("/", createPost);

// Update Post
router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router; //ECMASCRIPT

// module.exports = router; //Common Js
