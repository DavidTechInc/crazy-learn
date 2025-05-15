const mongoose = require('mongoose');

const quizProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: String, required: true },  // Identifiant du quiz ou catégorie
  score: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
  attempts: { type: Number, default: 0 },
  lastAttempt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizProgress', quizProgressSchema);