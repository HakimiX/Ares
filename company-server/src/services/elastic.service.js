const { Client } = require('elasticsearch');
const {ES_INDEX} = require("../utils/config");

class ElasticService {
  constructor() {
    this.client = new Client({
      host: [{
        host: 'elasticsearch',
        protocol: 'http',
        port: 9200,
        log: 'debug'
      }],
    });
  }

  async health() {
    return this.client.ping();
  }

  async getAllCompanies() {
    const companies = [];
    const result = await this.client.search({
      index: ES_INDEX,
      body: {
        query: {
          match_all: {}
        }
      }
    });

    result.hits.hits.forEach((hit) => {
      companies.push(hit._source.company);
    });

    return companies
  }

  async getCompanyById(id) {
    const result = await this.client.search({
      index: ES_INDEX,
      body: {
        query: {
          term: {
            'company.userId': parseInt(id)
          }
        }
      }
    });
    return result.hits.hits[0]._source.company;
  }
}

module.exports = new ElasticService();
