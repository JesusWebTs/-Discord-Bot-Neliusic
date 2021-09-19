const { Router } = require("express");
const userRouter = require("./user.router");
const botRouter = require("./bot.router");
const serverRouter = require("./server.router");
const router = Router();

router.use(userRouter).use(botRouter).use(serverRouter);

module.exports = router;
