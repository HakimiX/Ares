const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoService = require('./services/mongo.service');
const {PORT} = require("./utils/config");
const logger = require("./utils/logger");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req ,res) => {
  res.json({
    status: 'healthy'
  });
});

app.get('/address/all', async (req, res) => {
  const addresses = await mongoService.getAllAddresses();
  res.json(addresses)
});

app.get('/address/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const address = await mongoService.getAddressById(id);
    res.json(address)
  } catch (err) {
    res.send(500);
  }
});

app.listen(PORT, async (err) => {
  await mongoService.init();
  logger.info(`Server listening on http://localhost:${PORT}`);
});
