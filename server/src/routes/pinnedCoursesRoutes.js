const express = require("express");
const route = express.Router();
const PinnedCourses = require("../models/pinnedCourses");
const requireAuth = require("../middleware/requireAuth");

route.get("/pinnedCourses", requireAuth, async (req, res) => {
  let courses = await PinnedCourses.find({ user: req.user.userId });
  return res.send(courses);
});

route.post("/pinnedCourses", requireAuth, async (req, res) => {
  const { courseId } = req.body;
  let course =
    (await PinnedCourses.findOne({ courseId, user: req.user.userId })) ||
    new PinnedCourses();
  course.courseId = courseId;
  course.pinnedAt = Date.now();
  course.user = req.user.userId;

  try {
    await course.save();
    return res.send(course);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = route;
