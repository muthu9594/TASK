const mongoose = require("mongoose");

const Connection = async () => {
  const URL = "mongodb://localhost:27017";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database", error);
  }
};

module.exports = Connection;
