const { Router } = require("express");
const router = Router();
const { BotController } = require("../controller");
router
  .get("/bot", BotController.getAllBot)
  .get("/bot/:id", BotController.getOneBot)
  .post("/bot", BotController.createOneBot)
  .put("/bot", BotController.updateOneBot)
  .delete("/bot", BotController.deleteOneBot);

module.exports = router;
