const joinChannel = require("./joinChannel");
const help = require("./help");

module.exports = {
  commands: {
    join: joinChannel,
    help: help,
    /* leave: leave, */
  },
  section: "General",
};
