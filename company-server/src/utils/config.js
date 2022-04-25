require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  LOG_LEVEL_DEFAULT: process.env.LOG_LEVEL_DEFAULT,
  ES_HOST: process.env.ES_HOST,
  ES_USERNAME: process.env.ES_USERNAME,
  ES_PASSWORD: process.env.ES_PASSWORD,
  ES_INDEX: process.env.ES_INDEX
}
