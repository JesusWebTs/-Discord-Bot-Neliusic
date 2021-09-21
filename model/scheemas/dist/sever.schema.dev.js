"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema;

var ServerSchema = new Schema({
  serverId: "String",
  serverName: "String",
  anouncementChannelId: "String",
  countWords: {
    listWords: [],
    words: {}
  },
  commandList: {
    userId: {
      name: "String",
      command: [{
        command: "String",
        time: "String"
      }]
    }
  }
});
module.exports = ServerSchema;