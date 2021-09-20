const CoinMarketcapServices = require("./coinMarketCapServices");
const config = require("../config");

const { services } = config.currentEnv;
const { coinMarketCap } = services;

module.exports = {
  coinMarketcapServices: new CoinMarketcapServices({
    API_KEY: coinMarketCap.API_KEY,
    URL: "https://pro-api.coinmarketcap.com",
  }),
};
