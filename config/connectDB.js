const mongoose = require('mongoose');

const config = require('config');

const database = config.get('db');

const connectDB = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Database connected...');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
