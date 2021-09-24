module.exports = ({ message }) => {
  message.channel.send(`Available Commands: ${allKeys.join(", ")}.`);
};
