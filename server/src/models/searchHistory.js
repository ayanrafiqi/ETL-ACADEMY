const mongoose = require("mongoose");

const searchHistorySchema = new mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  keyword: String,
  type: String,
  searchedAt: Date,
});

module.exports = mongoose.model("searchHistory", searchHistorySchema);
