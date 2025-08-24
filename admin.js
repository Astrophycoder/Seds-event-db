const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// POST: Create Event
router.post("/create-event", async (req, res) => {
  try {
    const { name, date, location, description } = req.body;
    const newEvent = new Event({ name, date, location, description });

    await newEvent.save();
    res.send("✅ Event created successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error creating event");
  }
});

module.exports = router;
