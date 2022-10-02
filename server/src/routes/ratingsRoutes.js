const express = require("express");
const route = express.Router();
const Ratings = require("../models/ratings");
const Feedback = require("../models/feedback");
const requireAuth = require("../middleware/requireAuth");

route.get("/myratings", requireAuth, async (req, res) => {
  let ratings = await Ratings.findOne({ user: req.user.userId });
  return res.send(ratings);
});

route.put("/ratings", requireAuth, async (req, res) => {
  const { points, remarks } = req.body;
  let ratings =
    (await Ratings.findOne({ user: req.user.userId })) || new Ratings();
  ratings.points = points;
  ratings.modifiedDate = Date.now();
  ratings.user = req.user.userId;

  try {
    await ratings.save();
    if (remarks) {
      let feedback = new Feedback();
      feedback.remarks = remarks;
      feedback.createdDate = Date.now();
      feedback.user = req.user.userId;
      feedback.points = points;
      await feedback.save();
    }
    return res.send(ratings);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = route;
