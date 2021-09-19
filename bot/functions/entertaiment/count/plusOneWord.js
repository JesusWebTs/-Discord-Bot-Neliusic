module.exports = async ({ text, repositoresConnection, serverId }) => {
  const wordsArr = text.split(" ");
  const { ServerRepositories } = repositoresConnection;

  try {
    const res = await ServerRepositories.getOneServerByParam({
      param: {
        serverId,
      },
      show: { countWords: 1 },
    });
    const { words } = res[0].countWords;
    wordsArr.forEach((word) => {
      if (Object.hasOwnProperty.call(words, word)) {
        ServerRepositories.updateOneServerByParamUp({
          param: { serverId },
          body: { [`countWords.words.${word}`]: 1 },
        });
      }
    });
  } catch (err) {
    console.log("[MONGO BOT ERROR]", err);
  }
};
