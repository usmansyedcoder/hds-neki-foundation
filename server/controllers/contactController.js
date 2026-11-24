const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true },
    );
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
