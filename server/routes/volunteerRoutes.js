const express = require("express");
const router = express.Router();
const c = require("../controllers/volunteerController");
const { protect } = require("../middleware/auth");

router.post("/", c.createVolunteer);
router.get("/", protect, c.getVolunteers);
router.put("/:id", protect, c.updateVolunteerStatus);

module.exports = router;
