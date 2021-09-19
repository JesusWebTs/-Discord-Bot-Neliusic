const { BotRepositories } = require("../repositories");

class BotController {
  static getOneBot = async (req, res, next) => {
    const { id } = req.params;
    return BotRepositories.getOneBot({ id })
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

  static getAllBot = async (req, res, next) => {
    return BotRepositories.getAllBot()
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

  static createOneBot = async (req, res, next) => {
    const { body } = req;
    return BotRepositories.createOneBot({ body })
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

  static updateOneBot = async (req, res, next) => {};
  static deleteOneBot = async (req, res, next) => {};
}

module.exports = BotController;
