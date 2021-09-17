const { Client, Intents } = require("discord.js");
const COMMANDS = require("./commands.js");
const distube = require("./distube");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    "GUILDS",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGES",
  ],
});

distube(client);

const COMMAND_START = ".n";

client.on("ready", () => {
  console.log("I'm Ready");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const allKeys = Object.keys(COMMANDS);
  if (message.content.startsWith(COMMAND_START)) {
    const COMMAND_FUNCTION = message.content.split(" ")[1];
    if (Object.hasOwnProperty.call(COMMANDS, COMMAND_FUNCTION)) {
      let args = "";
      args = message.content
        .slice(COMMAND_START.length + COMMAND_FUNCTION.length + 2)
        .trim()
        .split(/ +/g);
      COMMANDS[`${COMMAND_FUNCTION}`]({
        message,
        client,
        allKeys,
        args,
      });
    } else {
      message.channel.send('Command dont exist, ".n help" for help.');
    }
  }
});

module.exports = client;
