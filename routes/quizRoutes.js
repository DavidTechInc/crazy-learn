const express = require('express');
const router = express.Router();
const {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  submitAnswer
} = require('../controllers/quizController');

router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/', createQuiz);
router.post('/:id/submit', submitAnswer);

module.exports = router;