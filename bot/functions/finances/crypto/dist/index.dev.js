"use strict";

var axios = require("axios")["default"];

module.exports = function _callee(_ref) {
  var message, servicesConnection, args, coinMarketcapServices;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          message = _ref.message, servicesConnection = _ref.servicesConnection, args = _ref.args;
          coinMarketcapServices = servicesConnection.coinMarketcapServices;

          try {
            if (!args[0]) {
              message.channel.send("<@".concat(message.author.id, "> You must provide a crypto tag. Example: .n crypto BTC"));
            } else if (args.length === 1) {
              currency1 = args[0].toUpperCase();
              coinMarketcapServices.getCurrency({
                symbol: currency1
              }).then(function (res) {
                if (res && res.error) {
                  message.channel.send("<@".concat(message.author.id, "> Crypto ").concat(args[0], " not found."));
                } else {
                  var currency1JSON = res.data["".concat(currency1)];
                  message.channel.send("<@".concat(message.author.id, "> **").concat(currency1JSON.name, "**: **1 ").concat(currency1JSON.symbol, "**  - **").concat(currency1JSON.quote.USD.price, " USD** "));
                }
              });
            } else if (args.length === 2) {
              currency1 = args[0].toUpperCase();
              currency2 = args[1].toUpperCase();
              coinMarketcapServices.getCurrency({
                symbol: "".concat(currency1, ",").concat(currency2)
              }).then(function (res) {
                if (res && res.error) {
                  message.channel.send("<@".concat(message.author.id, "> Crypto **").concat(args[0], "** or **").concat(args[1], "** not found."));
                } else {
                  var currency1JSON = res.data["".concat(currency1)];
                  var currency2JSON = res.data["".concat(currency2)];
                  message.channel.send("<@".concat(message.author.id, "> **").concat(currency1JSON.name, "**: **1 ").concat(currency1JSON.symbol, "**  - **").concat(currency2JSON.name, ": ").concat(currency1JSON.quote.USD.price / currency2JSON.quote.USD.price, " ").concat(currency2JSON.symbol, "** "));
                }
              });
            }
          } catch (err) {
            console.log("[BOT ERROR]", err);
          }

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};