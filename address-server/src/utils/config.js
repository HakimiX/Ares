require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  LOG_LEVEL_DEFAULT: process.env.LOG_LEVEL_DEFAULT,
  MONGO_INITDB_ROOT_USERNAME: process.env.MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD
}
