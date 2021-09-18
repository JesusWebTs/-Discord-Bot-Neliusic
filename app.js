const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { currentEnv } = require("./config");
const { itemRouter } = require("./routes");
require("./model/_conn");

const app = express();

app.set("port", currentEnv.PORT);

app
  .use(morgan("tiny"))
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use("/api", itemRouter);

module.exports = { app };
