<%= locals.title %>: This will output the value of locals.title into your HTML, escaping any HTML characters for security.

<%- locals.title %>: This will output the value of locals.title into your HTML without escaping, allowing HTML content to be rendered.

#### To update the updatedAt field in Mongoose

when saving a document, you typically don't need to manually update it unless you're doing some specific operations that don't automatically trigger Mongoose's update timestamps feature. Here's how you can ensure updatedAt updates correctly:

Using Mongoose's Timestamps Option
Mongoose has a built-in feature to handle createdAt and updatedAt timestamps automatically if you specify { timestamps: true } in your schema options.

##### Define Your Schema:

Ensure your Mongoose schema for Post includes the timestamps option. Here’s an example:

```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Automatically add `createdAt` and `updatedAt` fields
});

module.exports = mongoose.model("Post", postSchema);
```

In this schema definition, timestamps: true instructs Mongoose to automatically manage createdAt and updatedAt fields.

##### Updating a Document:

When you update a document and save it, Mongoose will automatically update the updatedAt field for you:

```
const Post = require("./models/Post");

// Example of updating a post
async function updatePost(postId, newTitle) {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error("Post not found");
        }

        post.title = newTitle;
        await post.save(); // `updatedAt` will be automatically updated

        console.log("Post updated successfully");
    } catch (error) {
        console.error("Error updating post:", error);
    }
}
```

// Usage example
`updatePost("668da78ac0f3dee81024e63e", "Updated Title");`

We find the post by its `_id`

Modify the title field.

Call post.save() to persist changes. Mongoose will automatically update the updatedAt field for you.
Manually Updating updatedAt
If you need to manually update updatedAt for some reason (though it's generally not recommended because Mongoose handles this automatically), you can do so like this:

```
const post = await Post.findById(postId);
post.title = "Updated Title";
post.updatedAt = new Date(); // Manually update `updatedAt`
await post.save();
```

However, ensure you have a specific reason for manually updating updatedAt, as Mongoose's automatic handling is typically more reliable and less error-prone.

By following these steps, you can effectively manage and update the updatedAt field in your Mongoose documents based on your application's requirements.
