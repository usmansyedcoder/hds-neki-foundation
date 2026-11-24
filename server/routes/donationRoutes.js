const express = require("express");
const router = express.Router();
const c = require("../controllers/donationController");
const { protect } = require("../middleware/auth");

router.post("/", c.createDonation);
router.get("/", protect, c.getDonations);
router.get("/stats", protect, c.getDonationStats);
router.put("/:id", protect, c.updateDonationStatus);

module.exports = router;
