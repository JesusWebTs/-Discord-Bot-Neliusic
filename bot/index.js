const bot = require("./botApp.js");
const { DISCORD_KEYS } = require("./config/api-discord-keys.js");

const botStart = ({ repositoresConnection }) => {
  const client = bot({ repositoresConnection });
  client
    .login(DISCORD_KEYS.LOGIN_TOKEM)
    .then(() => {
      console.log("[DISCORD BOT] Is Started an logged");
    })
    .catch((err) => {
      console.log("[DISCORD BOT ERROR]", err);
    });
  return client;
};

module.exports = botStart;
