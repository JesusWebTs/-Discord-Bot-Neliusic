const { Router } = require("express");
const router = Router();
const { ItemController } = require("../controller");

router
  .get("/items", ItemController.getAllItem)
  .get("/items/:id", ItemController.getOneItem)
  .post("/items", ItemController.createOneItem)
  .put("/items", ItemController.updateOneItem)
  .delete("/items", ItemController.deleteOneItem);

module.exports = router;
