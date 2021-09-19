const axios = require("axios");

module.exports = ({ message, client }) => {
  client.distube.leave(message);
};
