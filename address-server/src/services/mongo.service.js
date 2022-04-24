const {MongoClient} = require('mongodb');
const logger = require("../utils/logger");
const {MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD} = require("../utils/config");

class MongoService {
  constructor() {
    this.mongoInstance = new MongoClient(`mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017`)
  }

  async init(){
    await this.mongoInstance.connect();
    logger.info('Successfully connected to MongoDB');
    this.db = this.mongoInstance.db('ares');
    this.collection = this.db.collection('addresses');
  }

  async getAddressById(id) {
    try {
      const result = await this.collection.findOne({ userId: parseInt(id) });
      logger.info(`Fetched address with userId: ${id}: ${JSON.stringify(result)}`);
      return result;
    } catch (err) {
      logger.error(`Failed to get address by userId: ${id}`);
      throw err;
    }
  }

  async getAllAddresses() {
    try {
      const result = await this.collection.find({}).toArray();
      logger.info(`Fetched all: ${JSON.stringify(result, null, 2)}`);
      return result;
    } catch (err) {
      logger.error('Failed to fetch all addresses', err);
      throw err;
    }
  }
}

module.exports = new MongoService();
