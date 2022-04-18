const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT, PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT} = require('./utils/config');
const logger = require('./utils/logger')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pgClient = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT
});

pgClient.on('error', () => {
  logger.error('Database connection lost!')
});

app.get('/', (req, res) => {
  res.send('pour-server works!')
});

app.listen(PORT, err => {
  logger.info(`Server listening on http://localhost:${PORT}`);
});
