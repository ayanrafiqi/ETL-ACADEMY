const express = require("express");
const route = express.Router();
const User = require("../models/user");
const Profile = require("../models/profile");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

route.post("/register", async (req, res) => {
  try {
    let { name, username, email, password } = req.body;

    if (!(email && password && name && username)) {
      res.status(400).send("All fields is required");
    }

    email = email.toLowerCase();
    username = username.toLowerCase();

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(409).send("Email Already Exist. Please Login");
    }

    const usernameExists = await User.findOne({ username });

    if (usernameExists) {
      return res.status(409).send("Username Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email,
      password: encryptedPassword,
    });

    const profile = new Profile({ name, user: user._id });
    await profile.save();

    res.status(201).json(generateToken(user._id, user.username, user.email));
  } catch (err) {
    console.log(err);
  }
});

route.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Email and password are required");
    }

    email = email.toLowerCase();

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json(generateToken(user._id, user.username, user.email));
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

generateToken = (id, username, email) => {
  const token = jwt.sign({ userId: id, email }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
  return {
    id,
    email,
    username,
    token,
  };
};

module.exports = route;
