const { Schema } = require("mongoose");

const ServerSchema = new Schema({
  serverId: "String",
  serverName: "String",
  anouncementChannelId: "String",
  countWords: {
    listWords: [],
    words: {},
  },
  commandList: {
    userId: {
      name: "String",
      command: [{ command: "String", time: "String" }],
    },
  },
});

module.exports = ServerSchema;
