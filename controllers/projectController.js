const Project = require('../models/Project');

// Create or update a project
exports.saveProject = async (req, res) => {
  try {
    const { userId, projectId, title, htmlCode, cssCode, jsCode } = req.body;

    let project;
    if (projectId) {
      project = await Project.findOneAndUpdate(
        { _id: projectId, userId },
        { title, htmlCode, cssCode, jsCode, updatedAt: new Date() },
        { new: true }
      );
    } else {
      project = new Project({ userId, title, htmlCode, cssCode, jsCode });
      await project.save();
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all projects for a user
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.params.userId });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};