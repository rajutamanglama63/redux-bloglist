const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("./logger");

dotenv.config();

const PORT = process.env.PORT || 4000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info("MongoDB connection established...");
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

module.exports = {
  PORT,
  connectDB,
};
