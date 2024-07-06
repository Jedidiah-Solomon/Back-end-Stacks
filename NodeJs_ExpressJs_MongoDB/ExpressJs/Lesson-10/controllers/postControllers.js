let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
];

// @desc    Get all posts
// @route   GET /api/posts
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
};

// @desc    Get single post
// @route   GET /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);

    const filteredPosts = posts.filter((post) => post.id === id);

    if (filteredPosts.length > 0) {
        res.status(200).json(filteredPosts[0]);
    } else {
        const error = new Error(
            `A post with id: ${id} was not found. Please try again!`
        );
        error.status = 404;
        next(error); // Pass the error to the next middleware (error handler)
    }
};

// @desc    Create new post
// @route   POST /api/posts
export const createPost = (req, res, next) => {
    console.log(req.body); // Log the request body

    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if (!newPost.title) {
        const error = new Error("Please include a title");
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
};

// @desc    Update  post
// @route   PUT /api/posts/:ID
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`No post found with id ${id}`);
        error.status = 400;
        return next(error);
    }

    if (!req.body.title) {
        const error = new Error("Please include a title");
        error.status = 400;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`No post found with id ${id}`);
        error.status = 400;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};
