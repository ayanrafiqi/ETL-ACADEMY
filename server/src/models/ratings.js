const mongoose = require("mongoose");

const ratingsSchema = new mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  points: Number,
  modifiedDate: Date,
});

module.exports = mongoose.model("ratings", ratingsSchema);
