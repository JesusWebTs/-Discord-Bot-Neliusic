const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { currentEnv } = require("./config");
const router = require("./routes");
const repositories = require("./repositories");
const services = require("./services");
const botStart = require("./bot");

require("./model/_conn")
  .then(() => {
    botStart({
      repositoresConnection: repositories,
      servicesConnection: services,
    });
  })
  .catch((err) => {
    console.log("[Node Error]", err);
  });

const app = express();

app.set("port", currentEnv.PORT);

app
  .use(morgan("tiny"))
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use("/api", router)
  .use("/", (req,res)=>res.json({Neliusic: "I'm Ready"}))

module.exports = { app };
