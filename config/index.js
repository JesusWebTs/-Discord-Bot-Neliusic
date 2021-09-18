const { DEVELOPMENT, PRODUCTION } = require("./evironments");

const { config } = require("dotenv");

config();
let currentEnv = null;
const { NODE_ENV } = process.env;

if (NODE_ENV === "development") {
  currentEnv = DEVELOPMENT;
} else if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else {
  throw new Error(`[NODE_ENV: ERROR] Eviroment ${NODE_ENV} is not valid`);
}

module.exports = { currentEnv };
