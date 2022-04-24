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

  async upsert(address){
    try {
      await this.collection.replaceOne({ userId: address.userId }, address, { upsert: true });
    } catch (err) {
      logger.error(`Failed to upsert: ${JSON.stringify(address)}`);
      throw err
    }
  }
}

module.exports = new MongoService();
