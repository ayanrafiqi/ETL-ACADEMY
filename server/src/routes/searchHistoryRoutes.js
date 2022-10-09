const express = require("express");
const route = express.Router();
const SearchHistory = require("../models/searchHistory");
const requireAuth = require("../middleware/requireAuth");
const adminRequireAuth = require("../middleware/adminRequireAuth");

route.get("/searchHistory", requireAuth, async (req, res) => {
  let history = await SearchHistory.find({ user: req.user.userId });
  return res.send(history);
});

route.get(
  "/searchHistoryByUserId/:userId",
  adminRequireAuth,
  async (req, res) => {
    let history = await SearchHistory.find({ user: req.params.userId });
    return res.send(history);
  }
);

route.post("/searchHistory", requireAuth, async (req, res) => {
  const { keyword, type } = req.body;
  let history =
    (await SearchHistory.findOne({ keyword, type, user: req.user.userId })) ||
    new SearchHistory();
  history.keyword = keyword;
  history.type = type;
  history.searchedAt = Date.now();
  history.user = req.user.userId;

  try {
    await history.save();
    return res.send(history);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = route;
