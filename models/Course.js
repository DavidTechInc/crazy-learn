const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },  // HTML/text content
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
  topic: { type: String, required: true },
  badgesAwarded: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);