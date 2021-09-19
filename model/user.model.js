const { model } = require("mongoose");
const { UsersSchema } = require("./scheemas");

const UsersModel = model("users", UsersSchema);

module.exports = UsersModel;
