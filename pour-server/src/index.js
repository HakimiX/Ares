const {Pool} = require('pg');
const express = require('express');
const {Validator} = require("express-json-validator-middleware");
const {validate} = new Validator();
const bodyParser = require('body-parser');
const cors = require('cors');
const {PORT, PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT} = require('./utils/config');
const logger = require('./utils/logger')
const validationErrorMiddleware = require("./middleware/error.middleware");
const {personSchema} = require('./schema/person.schema');
const usersService = require('./services/users.service');

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
  res.json({
    status: "healthy"
  });
});

app.get('/user/all', async (req, res) => {
  const users = await usersService.getUsers();
  res.json({
    users
  });
});

app.get('/user/:id', async (req, res) => {
  const id = req.params.id;
  const user = await usersService.getUserById(id);
  res.json({
    user
  });
})

/*
app.post("/pour/person", validate({body: personSchema}), (req, res, next) => {
  const {userId, name} = req.body

  try {
    pgClient.query('INSERT INTO person(userId, name) VALUES($1, $2) ON CONFLICT DO NOTHING', [userId, name]);
  } catch (err) {
    logger.error('Failed to insert data', err);
    res.status(500);
  }

  res.json(req.body);
  next();
});*/

app.use(validationErrorMiddleware);

app.listen(PORT, err => {
  logger.info(`Server listening on http://localhost:${PORT}`);
});
