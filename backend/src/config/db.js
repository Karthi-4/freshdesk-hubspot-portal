const mongoose = require("mongoose");

module.exports = async () => {
 await mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
 });

 console.log("MongoDB connected");
};
