const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = async ({ message }) => {
  const userVoiceChannel = message.member.voice.channel;
  const botVoiceChannel = message.guild.me.voice.channel;
  const permissions = userVoiceChannel.permissionsFor(message.client.user);

  if (!userVoiceChannel)
    return message.channel.send("You should be on a voice channel!");
  if (botVoiceChannel) return null;
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  joinVoiceChannel({
    channelId: userVoiceChannel.id,
    guildId: message.guild.id,
    adapterCreator: message.guild.voiceAdapterCreator,
  });
};
