const axios = require("axios").default;
module.exports = async ({ message, servicesConnection, args }) => {
  const { coinMarketcapServices } = servicesConnection;
  try {
    if (!args[0]) {
      message.channel.send(
        `<@${message.author.id}> You must provide a crypto tag. Example: .n crypto BTC`
      );
    } else if (args.length === 1) {
      currency1 = args[0].toUpperCase();
      coinMarketcapServices
        .getCurrency({
          symbol: currency1,
        })
        .then((res) => {
          if (res && res.error) {
            message.channel.send(
              `<@${message.author.id}> Crypto ${args[0]} not found.`
            );
          } else {
            const currency1JSON = res.data[`${currency1}`];
            let currency1Price = currency1JSON.quote.USD.price;
            currency1Price =
              currency1Price > 1 ? currency1Price.toFixed(2) : currency1Price;
            const URL = `https://coinmarketcap.com/es/currencies/${currency1JSON.slug}/`;

            message.channel.send(
              `<@${message.author.id}> **${currency1JSON.name}**: **1 ${currency1JSON.symbol}**  - **${currency1Price} USD** \n ${URL}`
            );
          }
        });
    } else if (args.length === 2) {
      currency1 = args[0].toUpperCase();
      currency2 = args[1].toUpperCase();
      coinMarketcapServices
        .getCurrency({
          symbol: `${currency1},${currency2}`,
        })
        .then((res) => {
          if (res && res.error) {
            message.channel.send(
              `<@${message.author.id}> Crypto **${args[0]}** or **${args[1]}** not found.`
            );
          } else {
            const currency1JSON = res.data[`${currency1}`];
            const currency2JSON = res.data[`${currency2}`];
            let equivalent =
              currency1JSON.quote.USD.price / currency2JSON.quote.USD.price;
            equivalent = equivalent > 1 ? equivalent.toFixed(2) : equivalent;
            message.channel.send(
              `<@${message.author.id}> **${currency1JSON.name}**: **1 ${currency1JSON.symbol}**  - **${currency2JSON.name}: ${equivalent} ${currency2JSON.symbol}** `
            );
          }
        });
    }
  } catch (err) {
    console.log("[BOT ERROR]", err);
  }
};
