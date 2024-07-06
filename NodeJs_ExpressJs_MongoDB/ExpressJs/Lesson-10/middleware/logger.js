import colors from "colors";

// A middleware that logs request details || Middleware Logging: This logs the request details and should be at the top to log every request.
const logger = (req, res, next) => {
    const methodColors = {
        GET: "green",
        POST: "yellow",
        PUT: "blue",
        DELETE: "red",
        PATCH: "violet",
    };

    const color = methodColors[req.method] || white;

    console.log(
        `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
            color
        ]
    );
    next();
};

export default logger;

// console.log(
//     `Request method: ${req.method} &  Request Protocol: ${req.protocol} & Request URL: ${req.url} & Request Original URL: ${req.originalUrl}`
// ); // Request method: GET &  Request Protocol: http & Request URL: /api/posts & Request Original URL: /api/posts
// next(); // Pass control to the next middleware
