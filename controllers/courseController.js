const Course = require('../models/Course');

// List all courses (optionally by level or topic)
exports.listCourses = async (req, res) => {
  try {
    const filter = {};
    if (req.query.level) filter.level = req.query.level;
    if (req.query.topic) filter.topic = req.query.topic;

    const courses = await Course.find(filter);
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single course by id
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};