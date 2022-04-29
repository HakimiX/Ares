require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  LOG_LEVEL_DEFAULT: process.env.LOG_LEVEL_DEFAULT,
  JSONPLACEHOLDER_API_BASE_URL: process.env.JSONPLACEHOLDER_API_BASE_URL
}
