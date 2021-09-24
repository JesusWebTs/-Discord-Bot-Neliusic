"use strict";

var Distube = require("distube");

module.exports = function (client) {
  client.distube = new Distube["default"](client, {
    searchSongs: 1,
    searchCooldown: 30,
    leaveOnEmpty: false,
    emptyCooldown: 0,
    leaveOnFinish: false,
    leaveOnStop: false
  });

  var status = function status(queue) {
    return "Volume: `".concat(queue.volume, "%` | Filter: `").concat(queue.filters.join(", ") || "Off", "` | Loop: `").concat(queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off", "` | Autoplay: `").concat(queue.autoplay ? "On" : "Off", "`");
  };

  client.distube.on("playSong", function (queue, song) {
    return queue.textChannel.send("Playing `".concat(song.name, "` - `").concat(song.formattedDuration, "`\nRequested by: ").concat(song.user, "\n").concat(status(queue)));
  }).on("addSong", function (queue, song) {
    return queue.textChannel.send("Added ".concat(song.name, " - `").concat(song.formattedDuration, "` to the queue by ").concat(song.user));
  }).on("addList", function (queue, playlist) {
    return queue.textChannel.send("Added `".concat(playlist.name, "` playlist (").concat(playlist.songs.length, " songs) to queue\n").concat(status(queue)));
  }) // DisTubeOptions.searchSongs = true
  .on("searchResult", function (message, result) {
    var i = 0;
    message.channel.send("**Choose an option from below**\n```".concat(result.map(function (song) {
      return "".concat(++i, ". ").concat(song.name, " - `").concat(song.formattedDuration, "`");
    }).join("\n"), "```\n*Enter anything else or wait 30 seconds to cancel*"));
  }) // DisTubeOptions.searchSongs = true
  .on("searchCancel", function (message) {
    return message.channel.send("Searching canceled");
  }).on("searchInvalidAnswer", function (message) {
    return message.channel.send("searchInvalidAnswer");
  }).on("searchNoResult", function (message) {
    return message.channel.send("No result found!");
  }).on("error", function (textChannel, e) {
    console.error(e);
    textChannel.send("An error encountered: ".concat(e.slice(0, 2000)));
  }).on("finish", function (queue) {
    return queue.textChannel.send("Finish queue!");
  })
  /* .on("finishSong", (queue) => queue.textChannel.send("Finish song!")) */
  .on("disconnect", function (queue) {
    return queue.textChannel.send("Disconnected!");
  }).on("empty", function (queue) {
    return queue.textChannel.send("Empty!");
  });
};