module.exports = ({ message, allKeys }) => {  
  message.channel.send(`Available Commands: ${allKeys.join(", ")}.`);
};
