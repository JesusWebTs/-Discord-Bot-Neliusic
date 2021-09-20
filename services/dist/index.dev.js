"use strict";

var CoinMarketcapServices = require("./coinMarketCapServices");

var config = require("../config");

var services = config.currentEnv.services;
var coinMarketCap = services.coinMarketCap;
module.exports = {
  coinMarketcapServices: new CoinMarketcapServices({
    API_KEY: coinMarketCap.API_KEY,
    URL: "https://pro-api.coinmarketcap.com"
  })
};