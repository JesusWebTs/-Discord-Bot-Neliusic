const join = require("../joinChannel");

module.exports = async ({ message, client, args }) => {
  const cancion = args.join(" ");

  if (!cancion) return message.channel.send("You should write a song!");
  if (!message.guild.me.voice.channel) join({ message, client, args });

  console.log(args);
  console.log(cancion);

  client.distube.play(message, cancion);
};
