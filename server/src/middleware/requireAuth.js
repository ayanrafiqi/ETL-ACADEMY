const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("you must be Logged in.");

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(401).send("you must be Logged in.");
    const { userId, email, role } = payload;
    req.user = { userId, email, role };
    next();
  });
};
