const playMusic = require("./playMusic");
const pause = require("./pause");
const skip = require("./skip");
const stop = require("./stop");
const resume = require("./resume");
const queue = require("./queue");
const lyrics = require("./lyrics");

module.exports = {
  commands: {
    play: playMusic,
    p: playMusic,
    queue: queue,
    q: queue,
    pause: pause,
    skip: skip,
    stop: stop,
    resume: resume,
    /* lyrics: lyrics */
  },
  section: "music",
};
