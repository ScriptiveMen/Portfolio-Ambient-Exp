const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const resumeRoutes = require("./routes/resume.routes");
const projectRoutes = require("./routes/project.routes");
const skillRoutes = require("./routes/skill.routes");
const honorRoutes = require("./routes/honor.routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/admin/", userRoutes);
app.use("/api/admin/resume", resumeRoutes);
app.use("/api/admin/projects", projectRoutes);
app.use("/api/admin/skills", skillRoutes);
app.use("/api/admin/honors", honorRoutes);

module.exports = app;
