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

    // Create initial table
    this.pgClient.on('connect', (client) => {
      client.query('CREATE TABLE IF NOT EXISTS person (id int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, userId int UNIQUE, name VARCHAR UNIQUE)')
        .catch((err) => logger.error('Failed to create table', err))
    });

    // Populate initial data
    this.pgClient.query('INSERT INTO person(userId, name) VALUES($1, $2) ON CONFLICT DO NOTHING', [1, 'Leanne Graham']);
  }

  async getAllPersons() {
    try {
      const resultSet = await this.pgClient.query('SELECT * FROM person');
      return resultSet.rows;
    } catch (err) {
      logger.error(`Failed to get all persons from database`, err);
      throw err
    }
  }
}

module.exports = new DatabaseService();
