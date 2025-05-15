const express = require('express');
const router = express.Router();
const {
  saveProject,
  getProjectByUser,
  getAllProjects
} = require('../controllers/projectController');

router.post('/', saveProject);
router.get('/user/:userId', getProjectByUser);
router.get('/', getAllProjects);

module.exports = router;