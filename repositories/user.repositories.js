const { ItemModel } = require("../model");

class ItemRepositories {
  static getOneItem = async ({ id }) => {
    try {
      return ItemModel.find({ _id: id });
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static getAllItem = async () => {
    try {
      return ItemModel.find();
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  
  static createOneItem = async ({ body }) => {
    try {
      return ItemModel.create(body);
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static updateOneItem = async ({ id, body }) => {};
  static deleteOneItem = async ({ id }) => {};
}

module.exports = ItemRepositories;
