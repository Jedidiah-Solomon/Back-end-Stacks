const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.static("parent_home"));

app.use(morgan("dev"));

app.listen(PORT, HOST, () => {
  console.log(`server running on ${HOST}://${PORT}`);
});
