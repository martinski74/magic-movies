const express = require('express');
const { configDatabase } = require('./config/database');
const { configExpress } = require('./config/express');
const { configHbs } = require('./config/hbs');
const { router } = require('./config/routes');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

async function start() {
  const app = express();

  await configDatabase();
  configHbs(app);
  configExpress(app);
  app.use(router);

  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

start();
