const joinChannel = require("./joinChannel");
const help = require("./help");
const cls = require("./cls");

module.exports = {
  commands: {
    join: joinChannel,
    help: help,
    cls,
    /* leave: leave, */
  },
  section: "General",
};
