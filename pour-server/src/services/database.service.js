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
      logger.info('Successfully connected to Postgres');
      client.query('' +
        'CREATE TABLE IF NOT EXISTS person(' +
          'id int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, ' +
          'userId int UNIQUE,' +
          'name VARCHAR UNIQUE, ' +
          'username VARCHAR, ' +
          'email VARCHAR, ' +
          'phone VARCHAR, ' +
          'website VARCHAR)')
        .catch((err) => logger.error('Failed to create table', err))
    });
  }

  async insert({id, name, username, email, phone, website}) {
    try {
      await this.pgClient.query(
        "INSERT INTO person(userId, name, username, email, phone, website) " +
        "VALUES($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING",
        [id, name, username, email, phone, website]);
    } catch (err) {
      logger.info(`Failed to insert ${id}, ${name}`, err);
      throw err
    }
  }
}

module.exports = new DatabaseService();
