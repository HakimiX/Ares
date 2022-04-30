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

  async getPosts() {
    try {
      const response = await this.axiosInstance.get('/posts');
      logger.info(`response from server ${JSON.stringify(response.data)}`); // TOOD: remove this log
      return response.data;
    } catch (err) {
      logger.error('Failed to get all posts', err);
      throw err;
    }
  }

  async getPostById(id) {
    try {
      const response = await this.axiosInstance.get(`/posts/${id}`);
      logger.info(`response from server ${JSON.stringify(response.data)}`); // TOOD: remove this log
      return response.data;
    } catch (err) {
      logger.error(`Failed to get post by id: ${id}`, err);
      throw err;
    }
  }

  async getUsers() {
    try {
      const response = await this.axiosInstance.get('/users');
      return response.data;
    } catch (err) {
      logger.error('Failed to get all users', err);
      throw err;
    }
  }

  async getUserById(id) {
    try {
      const response = await this.axiosInstance.get(`/users/${id}`);
      return response.data;
    } catch (err) {
      logger.error(`Failed to get user by id: ${id}`, err);
      throw err;
    }
  }

  async getTodoById(id) {
    try {
      const response = await this.axiosInstance.get(`/todos/${id}`);
      return response.data;
    } catch (err) {
      logger.error(`Failed to get todo by id: ${id}`, err);
      throw err;
    }
  }

  async getAlbumsById(id) {
    try {
      const response = await this.axiosInstance.get(`/albums/${id}`);
      return response.data;
    } catch (err) {
      logger.error(`Failed to get album by id: ${id}`, err);
      throw err;
    }
  }
}

module.exports = new ApiService();
