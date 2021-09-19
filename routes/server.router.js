const { Router } = require("express");
const router = Router();
const { ServerController } = require("../controller");

router
  .get("/servers", ServerController.getAllServer)
  .get("/servers/:id", ServerController.getOneServer)
  .post("/servers", ServerController.createOneServer)
  .put("/servers", ServerController.updateOneServer)
  .delete("/servers", ServerController.deleteOneServer);

module.exports = router;
