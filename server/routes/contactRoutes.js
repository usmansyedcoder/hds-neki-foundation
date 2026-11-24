const express = require("express");
const router = express.Router();
const c = require("../controllers/contactController");
const { protect } = require("../middleware/auth");

router.post("/", c.createContact);
router.get("/", protect, c.getContacts);
router.put("/:id", protect, c.markRead);
router.delete("/:id", protect, c.deleteContact);

module.exports = router;
