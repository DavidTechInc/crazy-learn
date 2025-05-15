const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  createCourse,
  unlockCourse
} = require('../controllers/courseController');

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.post('/:id/unlock', unlockCourse);

module.exports = router;