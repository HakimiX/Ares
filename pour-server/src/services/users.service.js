const {JSONPLACEHOLDER_API_BASE_URL} = require("../utils/config");
const logger = require("../utils/logger");
const axios = require("axios");

class usersService {
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
      const res = await this.axiosInstance.get('users');
      return res.data
    } catch (err) {
      logger.error(`Failed to get users from ${JSONPLACEHOLDER_API_BASE_URL}`, err);
      throw err;
    }
  }

  async getUserById(id) {
    try {
      const res = await this.axiosInstance.get(`users/${id}`);
      return res.data;
    } catch (err) {
      logger.error(`Failed to get users by id: ${id} from ${JSONPLACEHOLDER_API_BASE_URL}`, err);
      throw err;
    }
  }
}

module.exports = new usersService();
