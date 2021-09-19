const { Router } = require("express");
const itemRouter = require("./user.router");
const router = Router();

router.use(itemRouter);

module.exports = router;
