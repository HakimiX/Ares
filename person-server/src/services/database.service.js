const {Pool} = require('pg');
const {PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT} = require("../utils/config");
const logger = require("../utils/logger");

class DatabaseService {
  constructor() {
    this.pgClient = new Pool({
      user: PGUSER,
      host: PGHOST,
      database: PGDATABASE,
      password: PGPASSWORD,
      port: PGPORT
    });

    this.pgClient.on('error', () => {
      logger.error('Database connection lost!')
    });
  }

  async getAllPersons() {
    try {
      const resultSet = await this.pgClient.query("SELECT * FROM person");
      return resultSet.rows;
    } catch (err) {
      logger.error(`Failed to get all persons from database`, err);
      throw err
    }
  }

  async getPersonById(id) {
    try {
      const person = await this.pgClient.query("SELECT * FROM person WHERE userId = $1", [parseInt(id)]);
      return person.rows;
    } catch (err) {
      logger.error(`Failed to get person with userId: ${id}`, err);
      throw err
    }
  }
}

module.exports = new DatabaseService();
