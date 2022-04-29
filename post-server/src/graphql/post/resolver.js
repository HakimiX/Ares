const apiService  = require('../../services/api.service');

const postsResolver = async (_) => {
  return await apiService.getUsers();
}

module.exports = postsResolver;
