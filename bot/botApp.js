const { Client, Intents, MessageButton } = require("discord.js");
const COMMANDS = require("./commands.js");
const distube = require("./distube");
const plusOneWord = require("./functions/entertaiment/count/plusOneWord");

const bot = ({ repositoresConnection = {}, servicesConnection = {} }) => {
  const { ServerRepositories } = repositoresConnection;

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
    console.log("[Niusic] I'm ready for commands!");
  });
  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    ServerRepositories.getOneServerByServerId({
      serverId: message.guildId,
    }).then((res) => {
      if (!res.length) {
        const serverId = message.guild.id;
        const serverName = message.guild.name;
        const ownerId = message.guild.ownerId;
        ServerRepositories.createOneServer({
          body: {
            serverId: serverId,
            serverName: serverName,
            countWords: {
              words: {
                Neliusic: 1,
              },
            },
          },
        }).then((res) => {
          message.channel.send(
            `Server **[${serverName}]** has been registered. Owner: <@${ownerId}>`
          );
        });
      } else {
        if (!message.content.startsWith(COMMAND_START)) {
          plusOneWord({
            repositoresConnection,
            text: message.content,
            serverId: message.guild.id,
          });
        }
      }
    });

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
          repositoresConnection,
          servicesConnection,
        });
      } else {
        message.channel.send('Command dont exist, ".n help" for help.');
      }
    }
  });

  return client;
};

module.exports = bot;
