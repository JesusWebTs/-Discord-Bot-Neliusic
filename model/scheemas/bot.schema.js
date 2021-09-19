const { Schema } = require("mongoose");

const BotSchema = new Schema({
  title: "string",
  content: "string",
});

module.exports = BotSchema;
