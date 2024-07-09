// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
// const PostSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     body: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model("Post", PostSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    featureImg: {
        type: String,
        required: true, // Assuming the feature image is required
    },
    requiredImg: {
        type: String,
        required: true, // This image is required
    },
    optionalImg: {
        type: String, // This image is optional
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Post", PostSchema);
