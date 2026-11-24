const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: "" },
    author: { type: String, default: "HDS Neki Foundation" },
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("News", newsSchema);
