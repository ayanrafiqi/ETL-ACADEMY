const express = require("express");
const route = express.Router();
const Feedback = require("../models/feedback");
const requireAuth = require("../middleware/requireAuth");

route.get("/myFeedbacks", requireAuth, async (req, res) => {
  let feedbacks = await Feedback.find({ user: req.user.userId });
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
