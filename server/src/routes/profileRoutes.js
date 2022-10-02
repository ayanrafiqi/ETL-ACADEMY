const express = require("express");
const route = express.Router();
const Profile = require("../models/profile");
const requireAuth = require("../middleware/requireAuth");

const multer = require("multer");
const path = require("path");

const fs = require("fs");
const { promisify } = require("util");

const unlinkAsync = promisify(fs.unlink);

route.get("/profile", requireAuth, async (req, res) => {
  let profile = await Profile.findOne({ user: req.user.userId }).populate(
    "user",
    "email"
  );
  return res.send(profile);
});

route.put("/profile", requireAuth, async (req, res) => {
  const { name, department, contactNo, address, cls } = req.body;
  let profile =
    (await Profile.findOne({ user: req.user.userId })) || new Profile();
  profile.name = name;
  profile.cls = cls;
  profile.department = department;
  profile.contactNo = contactNo;
  profile.address = address;
  profile.user = req.user.userId;

  try {
    await profile.save();
    let dbProfile = await Profile.findOne({ user: req.user._id }).populate(
      "user",
      "email"
    );
    return res.send(dbProfile);
  } catch (error) {
    return res.status(400).send(error);
  }
});

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("file");

route.post("/uploadDp", requireAuth, async (req, res) => {
  upload(req, res, async (err) => {
    if (!err) {
      let profile = await Profile.findOne({ user: req.user.userId });
      const existingPath = profile.dpPath;
      profile.dpPath = req.file.filename;
      await profile.save();
      if (existingPath) unlinkAsync("./public/uploads/" + existingPath);
      return res.status(200).send(req.file.filename).end();
    }
    return res.status(400).send("file size should be lesser than 1 MB");
  });
});

module.exports = route;
