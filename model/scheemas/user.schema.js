const { Schema } = require("mongoose");

const UsersSchema = new Schema({
  title: "string",
  content: "string",
});

module.exports = UsersSchema;
