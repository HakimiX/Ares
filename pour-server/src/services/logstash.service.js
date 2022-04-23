const axios = require('axios');
const {LOGSTASH_ENDPOINT} = require("../utils/config");
const logger = require("../utils/logger");

class LogstashService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: LOGSTASH_ENDPOINT,
      timeout: 5000,
    });
  }

  async insert(company) {
    try {
      await this.axiosInstance.post('', company);
    } catch (err) {
      logger.error(`Failed to insert ${JSON.stringify(company)} through Logstash`, err);
      throw err;
    }
  }
}

module.exports = new LogstashService();
