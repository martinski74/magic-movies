const mongoose = require('mongoose');
require('../models/Movie');
require('../models/Cast');
require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.MONGODB_URI;



async function configDatabase() {
  await mongoose.connect(connectionString);

  console.log('Database connected');
}

module.exports = { configDatabase };


