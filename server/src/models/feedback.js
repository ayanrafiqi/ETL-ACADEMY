const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  remarks: String,
  points: Number,
  createdDate: Date,
});

module.exports = mongoose.model("feedback", feedbackSchema);
