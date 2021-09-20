"use strict";

var express = require("express");

var cors = require("cors");

var morgan = require("morgan");

var _require = require("./config"),
    currentEnv = _require.currentEnv;

var router = require("./routes");

var repositories = require("./repositories");

var services = require("./services");

var botStart = require("./bot");

require("./model/_conn").then(function () {
  botStart({
    repositoresConnection: repositories,
    servicesConnection: services
  });
})["catch"](function (err) {
  console.log("[Node Error]", err);
});

var app = express();
app.set("port", currentEnv.PORT);
app.use(morgan("tiny")).use(cors()).use(express.urlencoded({
  extended: true
})).use(express.json()).use("/api", router);
module.exports = {
  app: app
};