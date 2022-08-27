const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect("mongodb://localhost:27017/fatma");
    console.log("db successfully connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectdb;
