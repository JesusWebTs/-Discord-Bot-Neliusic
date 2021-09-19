const { model } = require("mongoose");
const { ServerSchema } = require("./scheemas");

const ServerModel = model("servers", ServerSchema);

module.exports = ServerModel;
