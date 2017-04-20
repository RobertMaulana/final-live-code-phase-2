const passport      = require('passport'),
      passportLocal = require('passport-local'),
      hash          = require('password-hash'),
      jwt           = require('jsonwebtoken'),
      Strategy      = passportLocal.Strategy,
      db            = require('../models/user');

passport.use(new Strategy(
  (username, password, next) => {
    db.findOne(
        {username: username}
      )
      .then((result) => {
        if (result == null) {
          next("Username does not exist!")
        }else {
          if (username == result.username && hash.verify(password, result.password)) {
            var token = jwt.sign({ username: result.username }, 'secret', {expiresIn: '1h'});
            let data = {
              token: token,
              username: result.username,
              id: result.id
            }
            next(null, data);
          }
        }
      })
      .catch((err) => {
        // res.send(err.message)
        console.log(err.message);
      })
  }
));

module.exports = passport.authenticate("local", {session: false});
