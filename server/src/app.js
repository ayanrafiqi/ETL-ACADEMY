require("./models/user.js");
require("./models/profile.js");

require("dotenv").config();
require("./config/database").connect();
require("./config/seedUser").seedAdminUser();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const ratingsRoutes = require("./routes/ratingsRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const searchHistoryRoutes = require("./routes/searchHistoryRoutes");
const pinnedCoursesRoutes = require("./routes/pinnedCoursesRoutes");
const app = express();

app.use(express.static("public/uploads"));
app.use(express.json());

swaggerDocument = require("../swagger.json");

app.use("/api", authRoutes);   
app.use("/api", profileRoutes);
app.use("/api", ratingsRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", searchHistoryRoutes);
app.use("/api", pinnedCoursesRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = app;
