const { model } = require("mongoose");
const { ItemSchema } = require("./scheemas");

const ItemModel = model("item", ItemSchema);

module.exports = ItemModel;
