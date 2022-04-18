const log4js = require("log4js");
const { LOG_LEVEL_DEFAULT } = require('./config');

log4js.configure({
  appenders: {
    out: { type: 'stdout' }
  },
  categories: {
    default: { appenders: ['out'], level: LOG_LEVEL_DEFAULT || 'info' }
  },
});

const logger = log4js.getLogger();
module.exports = logger;
