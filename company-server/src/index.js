const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const {PORT} = require("./utils/config");
const logger = require("./utils/logger");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    status: 'healthy',
  });
});

app.listen(PORT, (err) => {
  logger.info(`Server listening on http://localhost:${PORT}`);
});

