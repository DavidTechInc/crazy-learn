const QuizProgress = require('../models/QuizProgress');

// Submit quiz result
exports.submitQuiz = async (req, res) => {
  try {
    const { userId, quizId, score, completed } = req.body;
    let progress = await QuizProgress.findOne({ userId, quizId });

    if (progress) {
      progress.score = score;
      progress.completed = completed;
      progress.attempts += 1;
      progress.lastAttempt = new Date();
    } else {
      progress = new QuizProgress({ userId, quizId, score, completed, attempts: 1 });
    }

    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get quiz progress for a user
exports.getQuizProgress = async (req, res) => {
  try {
    const userId = req.params.userId;
    const progress = await QuizProgress.find({ userId });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};