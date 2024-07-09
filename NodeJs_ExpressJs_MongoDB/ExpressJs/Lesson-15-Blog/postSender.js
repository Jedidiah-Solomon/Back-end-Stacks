const Post = require("./server/models/Post");

// Post 1
async function insertAgriculturePosts() {
    try {
        await Post.insertMany([
            {
                title: "Sustainable Farming Practices",
                body: "Explore sustainable farming practices that help preserve soil health and biodiversity.",
                featureImg: "/img/1.jpg", // Use 1.jpg as feature image
                requiredImg: "/img/2.jpg", // Use 2.jpg as required image
                optionalImg: "/img/3.jpg", // Use 3.jpg as optional image (if needed)
            },
            {
                title: "Organic Farming Benefits and Challenges",
                body: "Understand the benefits and challenges of organic farming, focusing on pesticide-free practices.",
                featureImg: "/img/4.jpg",
                requiredImg: "/img/2.jpg",
                // OptionalImg is skipped intentionally for testing
            },
            // Add more posts as needed
        ]);
        console.log("Agriculture posts inserted successfully.");
    } catch (error) {
        console.error("Error inserting agriculture posts:", error);
    }
}

// Post 2
async function insertHealthPosts() {
    try {
        const createdAt = new Date("2023-07-03T00:00:00Z"); // Set created date to July 3rd, 2023, a past date
        const updatedAt = new Date(); // Current date and time

        await Post.insertMany([
            {
                title: "Healthy Eating Habits",
                body: "Learn about healthy eating habits and their impact on overall well-being.",
                featureImg: "/img/1.jpg",
                requiredImg: "/img/2.jpg",
                optionalImg: "/img/3.jpg",
                createdAt: createdAt,
                updatedAt: updatedAt,
            },
            {
                title: "Exercise and Fitness Tips",
                body: "Explore effective exercise routines and fitness tips for maintaining a healthy lifestyle.",
                featureImg: "/img/1.jpg",
                requiredImg: "/img/4.jpg",
                // OptionalImg is skipped intentionally for testing
                createdAt: createdAt,
                updatedAt: updatedAt,
            },
            // Add more posts as needed
        ]);
        console.log("Health posts inserted successfully.");
    } catch (error) {
        console.error("Error inserting health posts:", error);
    }
}
//* -------------You can use this pattern, then change schema model if you like this------------------*//

// Post 3
async function insertTechPosts() {
    try {
        const insertedPosts = await Post.insertMany([
            {
                title: "Building APIs with Node.js",
                body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js",
            },
            {
                title: "Deployment of Node.js applications",
                body: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments...",
            },
            {
                title: "Authentication and Authorization in Node.js",
                body: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries.",
            },
            {
                title: "Understand how to work with MongoDB and Mongoose",
                body: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications.",
            },
            {
                title: "build real-time, event-driven applications in Node.js",
                body: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js.",
            },
            {
                title: "Discover how to use Express.js",
                body: "Discover how to use Express.js, a popular Node.js web framework, to build web applications.",
            },
            {
                title: "Asynchronous Programming with Node.js",
                body: "Asynchronous Programming with Node.js: Jedidiah - Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations.",
            },
            {
                title: "Learn the basics of Node.js and its architecture",
                body: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers.",
            },
            {
                title: "NodeJs Limiting Network Traffic by Jedidiah",
                body: "Learn how to limit network traffic.",
            },
            {
                title: "Learn Morgan - HTTP Request logger for NodeJs",
                body: "Learn Morgan.",
            },
        ]);
        console.log("Tech posts inserted successfully:");
    } catch (error) {
        console.error("Error inserting tech posts:", error);
    }
}

// Add more Posts

module.exports = {
    insertAgriculturePosts,
    insertTechPosts,
    insertHealthPosts,
};
