const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  department: { type: String, default: null },
  name: { type: String, default: null },
  cls: { type: String, default: null },
  address: { type: String, default: null },
  contactNo: { type: String, default: null },
  dpPath: { type: String, default: null },
});

module.exports = mongoose.model("profile", profileSchema);
