const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const resumeRoutes = require("./routes/resume.routes");
const app = express();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/admin/", userRoutes);
app.use("/api/admin/resume", resumeRoutes);

module.exports = app;
