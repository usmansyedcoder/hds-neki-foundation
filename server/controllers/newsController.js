const News = require("../models/News");

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

exports.getNews = async (req, res) => {
  try {
    const news = await News.find({ published: true }).sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNewsBySlug = async (req, res) => {
  try {
    const news = await News.findOne({ slug: req.params.slug });
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNews = async (req, res) => {
  try {
    const data = { ...req.body };
    if (!data.slug) data.slug = slugify(data.title);
    const news = await News.create(data);
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!news) return res.status(404).json({ message: "Not found" });
    res.json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
