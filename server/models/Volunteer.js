const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, default: "Peshawar" },
    skills: { type: String, default: "" },
    availability: {
      type: String,
      enum: ["Weekends", "Weekdays", "Full-time", "Part-time"],
      default: "Weekends",
    },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Volunteer", volunteerSchema);
