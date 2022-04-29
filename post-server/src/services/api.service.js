const axios = require("axios");
const logger = require('../utils/logger');
const {JSONPLACEHOLDER_API_BASE_URL} = require("../utils/config");

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: JSONPLACEHOLDER_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    });
  }

  async getUsers() {
    try {
      const response = await this.axiosInstance.get('users');
      logger.info(`response from server ${JSON.stringify(response.data)}`);

      return response.data;
    } catch (err) {
      logger.error('Failed to get users', err);
      throw err;
    }
  }
}

module.exports = new ApiService();
