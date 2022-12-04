const express = require("express");
const route = express.Router();
const Feedback = require("../models/feedback");
const requireAuth = require("../middleware/requireAuth");
const adminRequireAuth = require("../middleware/adminRequireAuth");

route.get("/myFeedbacks", requireAuth, async (req, res) => {
  let feedbacks = await Feedback.find({ user: req.user.userId });
  return res.send(feedbacks);
});

route.get("/feedbacksByUserId/:userId", adminRequireAuth, async (req, res) => {
  let feedbacks = await Feedback.find({ user: req.params.userId });
  return res.send(feedbacks);
});

route.get("/allfeedbacks", adminRequireAuth, async (req, res) => {
  let feedbacks = await Feedback.find({}).populate("profile", "name");
  return res.send(feedbacks);
});
route.get("/allTestimonials", async (req, res) => {
  let feedbacks = await Feedback.find({}).limit(3).populate({
  path:'user',select:'username role'});
  return res.send(feedbacks);
});

route.post("/feedback", requireAuth, async (req, res) => {
  const { remarks } = req.body;
  let feedback = new Feedback();
  feedback.remarks = remarks;
  feedback.createdDate = Date.now();
  feedback.user = req.user.userId;

  try {
    await feedback.save();
    return res.send(feedback);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = route;
