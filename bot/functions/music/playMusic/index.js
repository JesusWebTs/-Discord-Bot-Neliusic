const join = require("../../general/joinChannel");

module.exports = async ({ message, client, args }) => {
  const cancion = args.join(" ");

  if (!cancion) return message.channel.send("You should write a song!");
  if (!message.guild.me.voice.channel) {
    join({ message, client });
  }
  client.distube.play(message, cancion);
};
