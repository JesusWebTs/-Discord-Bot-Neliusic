const { ServerRepositories } = require("../repositories");

class ServerController {
  static getOneServer = async (req, res, next) => {
    const { id } = req.params;
    return ServerRepositories.getOneItem({ id })
      .then((item) => {
        if (item) {
          return res.status(200).json(item);
        } else {
          return res.status(404).json({});
        }
      })
      .catch((err) => {
        console.log("[Node Error] Controller error.", err);
        return res
          .status(500)
          .json({ error: true, status: 500, errorMessage: err.message });
      });
  };

  static getAllServer = async (req, res, next) => {
    return ServerRepositories.getAllItem()
      .then((items) => {
        if (items) {
          return res.status(200).json(items);
        } else {
          return res.status(404).json([]);
        }
      })
      .catch((err) => {
        console.log("[Node Error] Controller error.", err);
        return res
          .status(500)
          .json({ error: true, status: 500, errorMessage: err.message });
      });
  };

  static createOneServer = async (req, res, next) => {
    const { body } = req;
    return ServerRepositories.createOneItem({ body })
      .then((data) => {
        if (data) {
          return res.status(201).json(data);
        } else {
          return res.status(404).json([]);
        }
      })
      .catch((err) => {
        console.log("[Node Error] Controller error.", err);
        return res
          .status(500)
          .json({ error: true, status: 500, errorMessage: err.message });
      });
  };

  static updateOneServer = async (req, res, next) => {};
  static deleteOneServer = async (req, res, next) => {};
}

module.exports = ServerController;
