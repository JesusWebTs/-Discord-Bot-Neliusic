const { BotModel } = require("../model");

class ItemRepositories {
  static getOneBot = async ({ id }) => {
    try {
      return BotModel.find({ _id: id });
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static getAllBot = async () => {
    try {
      return BotModel.find();
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };

  static createOneBot = async ({ body }) => {
    try {
      return BotModel.create(body);
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static updateOneBot = async ({ id, body }) => {};
  static deleteOneBot = async ({ id }) => {};
}

module.exports = ItemRepositories;
