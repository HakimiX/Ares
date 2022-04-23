const express = require('express');
const {Validator} = require("express-json-validator-middleware");
const {validate} = new Validator();
const bodyParser = require('body-parser');
const cors = require('cors');
const {PORT} = require('./utils/config');
const logger = require('./utils/logger')
const validationErrorMiddleware = require("./middleware/error.middleware");
const {personSchema} = require('./schema/person.schema');
const usersService = require('./services/users.service');
const databaseService = require('./services/database.service');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
});

app.post('/pour/person', validate({body: personSchema}), async (req, res, next) => {
  try {
    await databaseService.insert(req.body);
  } catch (err) {
    res.send(500);
  }

  res.json(req.body);
  next();
});

app.get('/pour/auto', async (req, res, next) => {
  const users = await usersService.getUsers();

  try {
    await users.forEach((user) => {
      databaseService.insert(user);
    });
  } catch (err) {
    res.send(500);
  }

  res.json({
    status: "inserted",
    users
  });
});

app.use(validationErrorMiddleware);

app.listen(PORT, err => {
  logger.info(`Server listening on http://localhost:${PORT}`);
});
