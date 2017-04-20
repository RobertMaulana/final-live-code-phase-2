const db = require("../models/article");

let dataArticle = (req, res) => {
  db.find()
    .populate("author")
    .exec((err, result) => {
      if (!err) {
        res.send(result)
      }else {
        res.send(err)
      }
    })
}

let createArticle = (req, res) => {
  db.create({
    "title": req.body.title,
    "content": req.body.content,
    "author": req.body.author,
  }, (err, result) => {
    if (!err) {
      res.send(result)
    }else {
      res.send(err)
    }
  })
}

let dataArticleById = (req, res) => {
  db.findById(req.params.id, (err, result) => {
      if (!err) {
        res.send(result)
      }else {
        res.send(err)
      }
    })
}

let editArticle = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "title": req.body.title,
        "content": req.body.content,
        "author": req.body.author,
      }
    }, {new: true}, (err, result) => {
      if (!err) {
        res.send(result)
      }else {
        res.send(err)
      }
    })
}

let deleteArticle = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(result)
    }else {
      res.send(err)
    }
  })
}

module.exports = {
  dataArticle, createArticle, dataArticleById, editArticle, deleteArticle
}
