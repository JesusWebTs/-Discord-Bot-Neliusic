const showDolar = require("./showDolar");
const crypto = require("./crypto");

module.exports = {
  commands: { dolar: showDolar, $: showDolar, crypto: crypto },
  section: "Finances",
};
