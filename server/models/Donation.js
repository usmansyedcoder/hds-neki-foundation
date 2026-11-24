const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donorName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    purpose: { type: String, default: "General Fund" },
    message: { type: String, default: "" },
    paymentMethod: {
      type: String,
      enum: ["Bank Transfer", "JazzCash", "EasyPaisa", "Cash"],
      default: "Bank Transfer",
    },
    transactionId: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Donation", donationSchema);
