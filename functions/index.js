const playMusic = require("./playMusic");
const joinChannel = require("./joinChannel");
const help = require("./help");
const showDolar = require("./showDolar");
const queue = require("./queue");
const pause = require("./pause");
const skip = require("./skip");
const stop = require("./stop");
const resume = require("./resume");
const lyrics = require("./lyrics");

module.exports = {
  play: playMusic,
  p: playMusic,
  /* join: joinChannel, */
  help: help,
  dolar: showDolar,
  $: showDolar,
  queue: queue,
  q: queue,
  pause: pause,
  skip: skip,
  stop: stop,
  resume: resume,
  /* leave: leave, */
  lyrics: lyrics,
};
