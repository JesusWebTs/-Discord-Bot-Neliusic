const client = require("./app.js");
const runServer = require("./server");
const { DISCORD_KEYS } = require("./config/api-discord-keys.js");

client
  .login(DISCORD_KEYS.LOGIN_TOKEM)
  .then(() => {
    console.log("[DISCORD BOT] Is Started an loged");
    runServer();
  })
  .catch((err) => {
    console.log("[DISCORD BOT ERROR]", err);
  });
