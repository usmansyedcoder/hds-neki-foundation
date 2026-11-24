const Volunteer = require("../models/Volunteer");

exports.createVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);
    res.status(201).json({
      message: "Thank you for volunteering! We will contact you soon.",
      volunteer,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateVolunteerStatus = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    res.json(volunteer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
