const mongoose = require('mongoose'),
      db = require("./db");

let articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
})

let Article = db.model("Article", articleSchema)

module.exports = Article
