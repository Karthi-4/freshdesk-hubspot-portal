const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
 email: String,
 password: String,
 freshdesk: {
  domain: String,
  apiKey: String,
 },
 hubspotToken: String,
});

module.exports = mongoose.model("User", UserSchema);
