const mongoose = require('mongoose'),
      db = require("./db");

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String
})

let User = db.model("User", userSchema)

module.exports = User
