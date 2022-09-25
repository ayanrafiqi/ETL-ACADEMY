require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const requireAuth = require("./middleware/requireAuth");
const authRoutes = require("./routes/authRoute");
const app = express();

app.use(express.json());

app.get("/testauth", requireAuth, (req, res) => {
  res.send(req.user);
});
app.use("/api", authRoutes);
module.exports = app;
