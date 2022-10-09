const User = require("../models/user");
const Profile = require("../models/profile");
const bcrypt = require("bcryptjs");

exports.seedAdminUser = async () => {
  try {
    const emailExists = await User.findOne({ email: "admin@gmail.com" });

    if (emailExists) return;

    encryptedPassword = await bcrypt.hash("admin", 10);

    const user = await User.create({
      username: "admin",
      email: "admin@gmail.com",
      status: "Active",
      role: "Admin",
      password: encryptedPassword,
    });

    const profile = new Profile({ name: "Admin", user: user._id });
    await profile.save();
  } catch (err) {
    console.log(err);
  }
};
