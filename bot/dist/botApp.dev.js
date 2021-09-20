"use strict";

var _require = require("discord.js"),
    Client = _require.Client,
    Intents = _require.Intents,
    MessageButton = _require.MessageButton;

var COMMANDS = require("./commands.js");

var distube = require("./distube");

var plusOneWord = require("./functions/entertaiment/count/plusOneWord");

var bot = function bot(_ref) {
  var _ref$repositoresConne = _ref.repositoresConnection,
      repositoresConnection = _ref$repositoresConne === void 0 ? {} : _ref$repositoresConne,
      _ref$servicesConnecti = _ref.servicesConnection,
      servicesConnection = _ref$servicesConnecti === void 0 ? {} : _ref$servicesConnecti;
  var ServerRepositories = repositoresConnection.ServerRepositories;
  var client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, "GUILDS", "GUILD_VOICE_STATES", "GUILD_MESSAGES"]
  });
  distube(client);
  var COMMAND_START = ".n";
  client.on("ready", function () {
    console.log("[Niusic] I'm ready for commands!");
  });
  client.on("messageCreate", function _callee(message) {
    var allKeys, COMMAND_FUNCTION, args;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!message.author.bot) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            ServerRepositories.getOneServerByServerId({
              serverId: message.guildId
            }).then(function (res) {
              if (!res.length) {
                var serverId = message.guild.id;
                var serverName = message.guild.name;
                var ownerId = message.guild.ownerId;
                ServerRepositories.createOneServer({
                  body: {
                    serverId: serverId,
                    serverName: serverName
                  }
                }).then(function (res) {
                  message.channel.send("Server **[".concat(serverName, "]** has been registered. Owner: <@").concat(ownerId, ">"));
                });
              }
            });
            allKeys = Object.keys(COMMANDS);

            if (message.content.startsWith(COMMAND_START)) {
              COMMAND_FUNCTION = message.content.split(" ")[1];

              if (Object.hasOwnProperty.call(COMMANDS, COMMAND_FUNCTION)) {
                args = "";
                args = message.content.slice(COMMAND_START.length + COMMAND_FUNCTION.length + 2).trim().split(/ +/g);
                COMMANDS["".concat(COMMAND_FUNCTION)]({
                  message: message,
                  client: client,
                  allKeys: allKeys,
                  args: args,
                  repositoresConnection: repositoresConnection,
                  servicesConnection: servicesConnection
                });
              } else {
                message.channel.send('Command dont exist, ".n help" for help.');
              }
            } else {
              plusOneWord({
                repositoresConnection: repositoresConnection,
                text: message.content,
                serverId: message.guild.id
              });
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  return client;
};

module.exports = bot;