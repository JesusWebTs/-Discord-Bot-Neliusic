const entertaimentCommands = require("./entertaiment");
const financesCommands = require("./finances");
const generalCommands = require("./general");
const musicCommands = require("./music");

module.exports = {
  ...entertaimentCommands,
  ...financesCommands,
  ...generalCommands,
  ...musicCommands,
};
