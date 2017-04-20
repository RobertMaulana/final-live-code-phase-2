const express = require('express'),
      router = express.Router()

router.get("/", (req, res) => {
  res.send("welcome to CMS made by me")
})

module.exports = router
