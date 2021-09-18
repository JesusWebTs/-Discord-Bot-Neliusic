const { Schema } = require("mongoose");

const ItemSchema = new Schema({
  title: "string",
  content: "string",
});

module.exports = ItemSchema;
