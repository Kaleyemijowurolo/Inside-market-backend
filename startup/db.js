const winston = require('winston');
const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.MONGODB_URI

mongoose.set('strictQuery', true);

module.exports = function() {
    mongoose.connect(db)
      .then(() => winston.info(`IM-DB Connected Successfully!...`));
  }
