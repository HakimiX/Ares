require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  LOG_LEVEL_DEFAULT: process.env.LOG_LEVEL_DEFAULT,
  PGUSER: process.env.PGUSER,
  PGHOST: process.env.PGHOST,
  PGDATABASE: process.env.PGDATABASE,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: process.env.PGPORT,
  JSONPLACEHOLDER_API_BASE_URL: process.env.JSONPLACEHOLDER_API_BASE_URL,
  LOGSTASH_ENDPOINT: process.env.LOGSTASH_ENDPOINT
}
