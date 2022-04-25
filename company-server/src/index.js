const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const {PORT} = require("./utils/config");
const logger = require("./utils/logger");
const elasticService = require('./services/elastic.service');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    status: 'healthy',
  });
});

app.get('/company/all', async (req, res) => {
  try {
    const companies = await elasticService.getAllCompanies();
    res.json(companies)
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get('/company/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const company = await elasticService.getCompanyById(id);
    res.json(company);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(PORT, async (err) => {
  await elasticService.health()
    .then(() => logger.info(`Successfully connected to Elasticsearch`))
    .catch((err) => logger.error(`Elasticsearch is not responding`, err))
  logger.info(`Server listening on http://localhost:${PORT}`);
});

