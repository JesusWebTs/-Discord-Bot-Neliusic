const { ItemRepositories } = require("../repositories");

class ItemController {

  static getOneItem = async (req, res, next) => {
    const { id } = req.params;
    return ItemRepositories
      .getOneItem({ id })
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

  static getAllItem = async (req, res, next) => {
    return ItemRepositories.getAllItem()
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

  static createOneItem = async (req, res, next) => {
    const { body } = req;
    return ItemRepositories.createOneItem({ body })
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
  
  static updateOneItem = async (req, res, next) => {};
  static deleteOneItem = async (req, res, next) => {};
}

module.exports = ItemController;
