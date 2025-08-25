// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyParser from "body-parser";

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Connect MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/portfolio", {
// });

// // Schema
// const projectSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String,
//   link: String,
// });

// const Project = mongoose.model("Project", projectSchema);

// // Routes
// // Add Project
// app.post("/projects", async (req, res) => {
//   try {
//     const project = new Project(req.body);
//     await project.save();
//     res.json({ message: "Project added successfully", project });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get Projects
// app.get("/projects", async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
