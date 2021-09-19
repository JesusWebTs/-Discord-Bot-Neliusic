const { UsersModel } = require("../model");

class UsersRepositories {
  static getOneUsers = async ({ id }) => {
    try {
      return UsersModel.find({ _id: id });
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static getAllUsers = async () => {
    try {
      return UsersModel.find();
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  
  static createOneUsers = async ({ body }) => {
    try {
      return UsersModel.create(body);
    } catch (err) {
      console.log("[Node Error] Repositorie error", err);
      return false;
    }
  };
  static updateOneUsers = async ({ id, body }) => {};
  static deleteOneUsers = async ({ id }) => {};
}

module.exports = UsersRepositories;
