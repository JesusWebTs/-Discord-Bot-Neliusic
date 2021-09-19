module.exports = ({ message, args = [] }) => {
  let number2 = args[0] || 100;
  let number1 = 0;

  if (args.length > 1) {
    number1 = args[0] || 0;
    number2 = args[1] || 100;
  }

  const characterEmit = RegExp("[0-9]");

  if (characterEmit.test(number1) && characterEmit.test(number2)) {
    const maxNumber = parseInt(number2);
    const minNumber = parseInt(number1);
    const rolledNumber = Math.round(
      Math.random() * (maxNumber - minNumber) + minNumber
    );
    message.channel.send(
      `Rolled Number **[**${minNumber}-${maxNumber}**]** - **${rolledNumber}**`
    );
  } else {
    message.channel.send(`Parameter [${number1}-${number2}] is not a number.`);
  }
};
