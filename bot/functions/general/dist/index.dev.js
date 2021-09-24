"use strict";

var joinChannel = require("./joinChannel");

var help = require("./help");

var cls = require("./cls");

module.exports = {
  commands: {
    join: joinChannel,
    help: help,
    cls: cls
    /* leave: leave, */

  },
  section: "General"
};