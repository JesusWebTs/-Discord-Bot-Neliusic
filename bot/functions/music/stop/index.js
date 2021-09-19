module.exports = ({ message, client }) => {
  client.distube.stop(message);
  message.channel.send("Stopped the music!");
};
