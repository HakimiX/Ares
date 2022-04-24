const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {PORT} = require('./utils/config');
const databaseService = require('./services/database.service');
const logger = require('./utils/logger')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.get('/person/all', async (req, res) => {
  try {
    const result = await databaseService.getAllPersons();
    res.json({
      result
    });
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get('/person/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const person = await databaseService.getPersonById(id);
    res.json(person);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(PORT, err => {
  logger.info(`Server listening on http://localhost:${PORT}`);
});

