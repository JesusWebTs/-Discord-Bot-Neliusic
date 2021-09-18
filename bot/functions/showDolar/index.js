const axios = require("axios").default;
module.exports = ({ message }) => {
  axios
    .get("https://s3.amazonaws.com/dolartoday/data.json")
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      message.channel.send(
        `\`\`\`Dolar Price: 1$ = ${data.USD.transferencia}Bsf - date: ${data._timestamp.fecha_corta}\`\`\``
      );
    });
};
