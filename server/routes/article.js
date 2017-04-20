const express = require('express'),
      router = express.Router(),
      controller = require("../controllers/article");

router.get("/", controller.dataArticle)
router.post("/", controller.createArticle)
router.get("/:id", controller.dataArticleById)
router.put("/:id", controller.editArticle)
router.delete("/:id", controller.deleteArticle)

module.exports = router
