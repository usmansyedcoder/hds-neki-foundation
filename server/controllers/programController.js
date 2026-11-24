const Program = require("../models/Program");

exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find({ active: true }).sort({ order: 1 });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find().sort({ order: 1 });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProgramBySlug = async (req, res) => {
  try {
    const program = await Program.findOne({ slug: req.params.slug });
    if (!program) return res.status(404).json({ message: "Program not found" });
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!program) return res.status(404).json({ message: "Not found" });
    res.json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProgram = async (req, res) => {
  try {
    await Program.findByIdAndDelete(req.params.id);
    res.json({ message: "Program removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
