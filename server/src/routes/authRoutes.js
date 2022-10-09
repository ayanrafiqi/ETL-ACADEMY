const express = require("express");
const route = express.Router();
const User = require("../models/user");
const Profile = require("../models/profile");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = require("../app");
const adminRequireAuth = require("../middleware/adminRequireAuth");

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
      status: "Active",
      role: "Student",
      password: encryptedPassword,
    });

    const profile = new Profile({ name, user: user._id });
    await profile.save();

    res.status(201).json(generateToken(user));
  } catch (err) {
    console.log(err);
  }
});

route.put("/changeUserStatus", adminRequireAuth, async (req, res) => {
  let { userId, status } = req.body;
  let user = await User.findOne({ _id: userId });
  if (!user) return res.status(400).send("Invalid User Id");

  user.status = status;
  user.save();
  return res.status(200).send("Status changed successfully");
});

route.get("/users", adminRequireAuth, async (_, res) => {
  let users = await User.find({});
  return res.status(200).send(users);
});

route.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Email and password are required");
    }

    email = email.toLowerCase();

    const user = await User.findOne({ email });

    if (!user || !bcrypt.compare(password, user.password))
      return res.status(400).send("Invalid Credentials");

    if (user.status == "Blocked")
      return res
        .status(400)
        .send("Your account has been blocked, please contact adminstrator");

    return res.status(200).json(generateToken(user));
  } catch (err) {
    console.log(err);
  }
});

generateToken = (user) => {
  const token = jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return {
    id: user._id,
    email: user.email,
    username: user.username,
    token,
    role: user.role,
    status: user.status,
  };
};

module.exports = route;
