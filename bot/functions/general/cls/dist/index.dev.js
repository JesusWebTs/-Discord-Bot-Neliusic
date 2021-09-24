"use strict";

module.exports = function (_ref) {
  var message = _ref.message;
  message.channel.send("Available Commands: ".concat(allKeys.join(", "), "."));
};