const entertaimentCommands = require("./entertaiment");
const financesCommands = require("./finances");
const generalCommands = require("./general");
const musicCommands = require("./music");

module.exports = {
  ...entertaimentCommands.commands,
  ...financesCommands.commands,
  ...generalCommands.commands,
  ...musicCommands.commands,
};
