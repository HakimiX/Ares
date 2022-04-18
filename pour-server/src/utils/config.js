require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  LOG_LEVEL_DEFAULT: process.env.LOG_LEVEL_DEFAULT,
  PGUSER: process.env.PGUSER,
  PGHOST: process.env.PGHOST,
  PGDATABASE: process.env.PGDATABASE,
  PGPASSWORD: process.env.PGPASSWORD,
  PGPORT: process.env.PGPORT
}
