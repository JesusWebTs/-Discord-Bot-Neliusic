const { ServerModel } = require("../model");

class ServerRepositories {
  static getOneServer = async ({ id }) => {
    try {
      return ServerModel.find({ _id: id });
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };

  static getOneServerByServerId = async ({ serverId }) => {
    try {
      return ServerModel.find({ serverId });
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static getOneServerByParam = async ({ param, show = {} }) => {
    try {
      return ServerModel.find(param, show);
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };

  static getAllServer = async () => {
    try {
      return ServerModel.find();
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };

  static createOneServer = async ({ body }) => {
    try {
      return ServerModel.create(body);
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static updateOneServerByParam = async ({ param, body, add = true }) => {
    const set = add ? "$set" : "$unset";
    try {
      return ServerModel.updateOne(param, {
        [`${set}`]: body,
      });
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };

  static updateOneServerByParamUp = async ({ param, body }) => {
    try {
      return ServerModel.updateOne(param, {
        $inc: body,
      });
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static deleteOneServer = async ({ id }) => {};
}

module.exports = ServerRepositories;
