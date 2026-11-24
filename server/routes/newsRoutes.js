const express = require("express");
const router = express.Router();
const c = require("../controllers/newsController");
const { protect } = require("../middleware/auth");

router.get("/", c.getNews);
router.get("/all", protect, c.getAllNews);
router.get("/:slug", c.getNewsBySlug);
router.post("/", protect, c.createNews);
router.put("/:id", protect, c.updateNews);
router.delete("/:id", protect, c.deleteNews);

module.exports = router;
