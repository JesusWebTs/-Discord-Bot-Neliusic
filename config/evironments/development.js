const { config } = require("dotenv");
config();

module.exports = {
  PORT: "5000",
  HOST: "localhost",
  mongoDB: {
    dialect: "mongodb",
    dbName: "Neliusic-dev",
    uri: "mongodb://127.0.0.1:27017/Neliusic-dev",
  },
  services: {
    coinMarketCap: {
      API_KEY: process.env.CNC_API_KEY,
    },
  },
};
