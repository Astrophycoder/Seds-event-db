// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://malavikapangavoor2005:Alohomora@cluster0.fumyntl.mongodb.net/eventDB?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("✅ MongoDB Connected..."))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Import routes
const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);

// Serve HTML form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "createEvent.html"));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
