module.exports = async ({ message, repositoresConnection, args = [] }) => {
  const { ServerRepositories } = repositoresConnection;
  const enlistedWord = args[0].toLocaleLowerCase();

  try {
    const res = await ServerRepositories.getOneServerByParam({
      param: {
        serverId: message.guild.id,
      },
      show: { countWords: 1 },
    });
    const { words } = await res[0].countWords;

    if (!args[0]) {
      let wordsToString = "";
      for (const word in words) {
        if (Object.hasOwnProperty.call(words, word)) {
          const value = words[word];
          wordsToString += `${word} - ${value} \n`;
        }
      }
      message.channel.send(
        `**Enlisted Words**\n\`\`\`${wordsToString}\`\`\`\n`
      );
    } else if (args.length === 1) {
      if (Object.hasOwnProperty.call(words, enlistedWord)) {
        const count = words[`${enlistedWord}`];
        message.channel.send(`\`\`\`${enlistedWord} - ${count}\`\`\``);
      } else {
        message.channel.send(
          `word: **${enlistedWord}** is not added, to add type .n count ${enlistedWord} +`
        );
      }
    } else if (args.length === 2) {
      if (args[1] === "+") {
        if (!words[`${enlistedWord}`]) {
          ServerRepositories.updateOneServerByParam({
            param: {
              serverId: message.guild.id,
            },
            body: {
              countWords: { words: { ...words, [`${enlistedWord}`]: 1 } },
            },
          });
          message.channel.send(`Word: **${enlistedWord}** was added succesfully.`);
        } else {
          message.channel.send(`Word: **${enlistedWord}** is already added.`);
        }
      }
      if (args[1] === "-") {
        if (words[`${enlistedWord}`]) {
          delete words[`${enlistedWord}`];

          ServerRepositories.updateOneServerByParam({
            param: {
              serverId: message.guild.id,
            },
            body: {
              countWords: { words },
            },
            add: true,
          });
          message.channel.send(`Word: **${enlistedWord}** was removed successfully.`);
        } else {
          message.channel.send(`Word: **${enlistedWord}** is not listed.`);
        }
      }
    }
  } catch (err) {
    console.log("[MONGO BOT ERROR]", err);
  }
};
