const express = require("express");
const router = express.Router();
const c = require("../controllers/programController");
const { protect } = require("../middleware/auth");

router.get("/", c.getPrograms);
router.get("/all", protect, c.getAllPrograms);
router.get("/:slug", c.getProgramBySlug);
router.post("/", protect, c.createProgram);
router.put("/:id", protect, c.updateProgram);
router.delete("/:id", protect, c.deleteProgram);

module.exports = router;
