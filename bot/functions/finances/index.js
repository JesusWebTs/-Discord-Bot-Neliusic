const showDolar = require("./showDolar");

module.exports = {
  commands: { dolar: showDolar, $: showDolar },
  section: "Finances",
};
