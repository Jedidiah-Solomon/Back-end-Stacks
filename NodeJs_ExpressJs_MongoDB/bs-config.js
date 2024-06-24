module.exports = {
    proxy: "localhost:3505",
    files: ["*.html", "*.css", "*.js", "*.jsx", "img/*.{png,jpg,jpeg,gif,svg}"],
    port: 4004, //it redirects your port to its own, here is 4000 i.e takes it from port 3005 to 4000
    open: true, //if set true, it opens browser on server spin automatically
    reloadDelay: 1000, // REDUCE THE RELOAD TIME TO 1s
    logLevel: "debug", // Enables detailed logging
    logConnections: true,
    logFileChanges: true,
};
