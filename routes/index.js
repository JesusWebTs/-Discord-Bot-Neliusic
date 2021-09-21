const { Router } = require("express");
const userRouter = require("./user.router");
const botRouter = require("./bot.router");
const serverRouter = require("./server.router");
const router = Router();

router
.get("/", (req,res)=>res.json({
         endPoints:{
             1: "Server",
             2: "Users",
             3: "Bot",
         }
     }))
     
.use(userRouter).use(botRouter).use(serverRouter);

module.exports = router;
