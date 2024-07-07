require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const Port = process.env.PORT || 5000;

// Static Route
app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("views", "./views/layouts");
app.set("layout", "main"); // main.ejs will be used as the layout
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
