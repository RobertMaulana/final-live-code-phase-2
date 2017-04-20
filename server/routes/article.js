const express = require('express'),
      router = express.Router(),
      controller = require("../controllers/article"),
      passport = require("../helpers/passport"),
      token = require("../helpers/token");

router.get("/", controller.dataArticle)
router.post("/", token, controller.createArticle)
router.get("/:id", token, controller.dataArticleById)
router.put("/:id", token, controller.editArticle)
router.delete("/:id", token, controller.deleteArticle)

module.exports = router
