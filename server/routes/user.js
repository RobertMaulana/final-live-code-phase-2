const express = require('express'),
      router = express.Router(),
      controller = require("../controllers/user"),
      passport = require("../helpers/passport"),
      token = require("../helpers/token");

router.get("/", token, controller.dataUser)
router.post("/signin", passport, controller.signinUser)
router.post("/signup", controller.createUser)
router.get("/:id", token, controller.dataUserById)
router.put("/:id", token, controller.editUser)
router.delete("/:id", token, controller.deleteUser)

module.exports = router
