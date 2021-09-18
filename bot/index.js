const client = require("./botApp.js");
const { DISCORD_KEYS } = require("./config/api-discord-keys.js");

client
  .login(DISCORD_KEYS.LOGIN_TOKEM)
  .then(() => {
    console.log("[DISCORD BOT] Is Started an loged");
  })
  .catch((err) => {
    console.log("[DISCORD BOT ERROR]", err);
  });
