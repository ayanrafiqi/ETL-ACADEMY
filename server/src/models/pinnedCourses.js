const mongoose = require("mongoose");

const pinnedCoursesSchema = new mongoose.Schema({
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  courseId: String,
  pinnedAt: Date,
});

module.exports = mongoose.model("pinnedCourses", pinnedCoursesSchema);
