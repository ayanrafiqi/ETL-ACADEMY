const express = require("express");
const route = express.Router();
const PinnedCourses = require("../models/pinnedCourses");
const requireAuth = require("../middleware/requireAuth");
const adminRequireAuth = require("../middleware/adminRequireAuth");
const pinnedCourses = require("../models/pinnedCourses");

route.get("/pinnedCourses", requireAuth, async (req, res) => {
  let courses = await PinnedCourses.find({ user: req.user.userId });
  return res.send(courses);
});
route.get("/recommendedCourses", async (req, res) => {
  let courses = await PinnedCourses.find().limit(3);
  return res.send(courses);
});

route.delete("/pinnedCourses/:id", requireAuth ,async(req,res)=>{
  await pinnedCourses.deleteOne({_id:req.params.id});
  return res.send("Deleted Succesfully");
})


route.get(
  "/pinnedCoursesByUserId/:userId",
  adminRequireAuth,
  async (req, res) => {
    let courses = await PinnedCourses.find({ user: req.params.userId });
    return res.send(courses);
  }
);

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
