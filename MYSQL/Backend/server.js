const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");

require("dotenv").config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../Frontend")));
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
