const { connect } = require("mongoose");
const { currentEnv } = require("../config");
const { mongoDB } = currentEnv;
const DbURI = `${mongoDB.uri}`;

const conn = connect(DbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`[Mongoose] DB:${mongoDB.dbName} is Connected`);
    console.log("--------------------");
  })
  .catch((err) => {
    console.log("[Mongoose Error] Error connecting DB", err);
  });

module.exports = conn;
