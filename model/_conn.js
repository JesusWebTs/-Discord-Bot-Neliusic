const { connect } = require("mongoose");
const { currentEnv } = require("../config");
const { mongoDB } = currentEnv;
const DbURI = `${mongoDB.uri}/${mongoDB.dbName}`;

const conn = connect(DbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("[Mongoose] DB is Connected");
    console.log("--------------------");
  })
  .catch((err) => {
    console.log("[Mongoose Error] Error connecting DB", err);
  });

module.exports = conn;
