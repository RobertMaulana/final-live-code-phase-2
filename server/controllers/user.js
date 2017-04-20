const db = require("../models/user"),
      hash = require("password-hash");

let signinUser = (req, res) => {
  db.findById(req.params.id, (err, result) => {
      if (!err) {
        res.send(result)
      }else {
        res.send(err)
      }
    })
}

let dataUser = (req, res) => {
  db.find({}, (err, result) => {
    if (!err) {
      res.send(result)
    }
  })
}

let createUser = (req, res) => {
  db.create({
    "name": req.body.name,
    "username": req.body.username,
    "email": req.body.email,
    "password": hash.generate(req.body.password),
  }, (err, result) => {
    if (!err) {
      res.send(result)
    }
  })
}

let dataUserById = (req, res) => {
  db.findById(req.params.id, (err, result) => {
      if (!err) {
        res.send(result)
      }else {
        res.send(err)
      }
    })
}

let editUser = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "password": hash.generate(req.body.password),
      }
    }, {new: true}, (err, result) => {
      if (!err) {
        res.send(result)
      }else {
        res.send(err)
      }
    })
}

let deleteUser = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(result)
    }
  })
}

module.exports = {
  dataUser, createUser, dataUserById, editUser, deleteUser, signinUser
}
