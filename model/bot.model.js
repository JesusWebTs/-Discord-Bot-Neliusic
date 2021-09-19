const { model } = require("mongoose");
const { BotSchema } = require("./scheemas");
const BotModel = model("bot", BotSchema);

module.exports = BotModel;
