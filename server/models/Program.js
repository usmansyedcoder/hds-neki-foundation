const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Education",
        "Food Assistance",
        "Humanitarian",
        "Community Welfare",
        "Ramazan",
        "Religious",
        "Other",
      ],
      default: "Other",
    },
    image: { type: String, default: "" },
    icon: { type: String, default: "Heart" },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Program", programSchema);
