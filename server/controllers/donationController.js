const Donation = require("../models/Donation");

exports.createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);
    res
      .status(201)
      .json({ message: "Donation recorded. Thank you!", donation });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateDonationStatus = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    res.json(donation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDonationStats = async (req, res) => {
  try {
    const total = await Donation.aggregate([
      { $match: { status: "verified" } },
      { $group: { _id: null, total: { $sum: "$amount" }, count: { $sum: 1 } } },
    ]);
    const pending = await Donation.countDocuments({ status: "pending" });
    res.json({
      totalAmount: total[0]?.total || 0,
      verifiedCount: total[0]?.count || 0,
      pendingCount: pending,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
