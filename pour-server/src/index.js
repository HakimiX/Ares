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
const logstashService = require('./services/logstash.service');
const mongoService = require('./services/mongo.service');

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

app.post('/pour/address', async (req, res) => {
  try {
    await mongoService.upsert(req.body);
  } catch (err) {
    res.send(500);
  }

  res.json({
    status: 'inserted',
    address: req.body
  });
});

app.post('/pour/company', async (req, res) => {

});

app.get('/pour/all', async (req, res, next) => {
  const users = await usersService.getUsers();

  let companies = [];
  let addresses = [];

  users.forEach(({ company, id, address }) => {
    const companyRelation = {...company, userId: id};
    const addressRelation = {...address, userId: id};
    companies.push({ company: companyRelation });
    addresses.push(addressRelation);
  });

  try {
    // upsert postgres
    await users.forEach((user) => {
      databaseService.insert(user);
    });

    // upsert elasticsearch
    await companies.forEach((company) => {
      logstashService.insert(company)
    });

    // upsert mongodb
    await addresses.forEach((address) => {
      mongoService.upsert(address);
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

app.listen(PORT, async (err) => {
  await mongoService.init();
  logger.info(`Server listening on http://localhost:${PORT}`);
});
