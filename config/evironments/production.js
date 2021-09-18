module.exports = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  mongoDB: {
    dialect: "mongodb",
    dbName: process.env.DB_NAME,
    uri: process.env.DB_URI,
  },
};
