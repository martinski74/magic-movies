const mongoose = require('mongoose');
require('../models/Movie');
require('../models/Cast');
require('../models/User');
const dotenv = require('dotenv');
const { User } = require('../models/User');
const { Movie } = require('../models/Movie');



dotenv.config();

const connectionString = process.env.DATABASE_URL;

async function configDatabase() {
  await mongoose.connect(connectionString);

  console.log('Database connected');
}

module.exports = { configDatabase };


