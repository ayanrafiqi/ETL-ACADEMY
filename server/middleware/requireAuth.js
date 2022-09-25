// const config = process.env;

// const verifyToken = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }
//   try {
//     const decoded = jwt.verify(token, "process.env.TOKEN_KEY");
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }
//   return next();
// };

const jwt = require("jsonwebtoken");

// const mongoose = require("mongoose");
// const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("you must be Logged in.");

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, "process.env.TOKEN_KEY", async (err, payload) => {
    if (err) return res.status(401).send("you must be Logged in.");
    console.log(payload);
    const { userId, email } = payload;
    req.user = { userId, email };
    next();
  });
};
