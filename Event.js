const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const eventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        default: uuidv4,
        unique: true
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Event", eventSchema);
