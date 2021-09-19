const { Router } = require("express");
const router = Router();
const { UsersController } = require("../controller");

router
  .get("/users", UsersController.getAllBot)
  .get("/users/:id", UsersController.getOneBot)
  .post("/users", UsersController.createOneBot)
  .put("/users", UsersController.updateOneBot)
  .delete("/users", UsersController.deleteOneBot);

module.exports = router;
