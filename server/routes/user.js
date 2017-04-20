const express = require('express'),
      router = express.Router(),
      controller = require("../controllers/user"),
      passport = require("../helpers/passport"),
      token = require("../helpers/token");

router.get("/", controller.dataUser)
router.post("/", controller.createUser)
router.get("/:id", controller.dataUserById)
router.put("/:id", controller.editUser)
router.delete("/:id", controller.deleteUser)

module.exports = router
