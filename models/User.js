const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  avatar: { type: String, default: '/img/avatars/avatar1.png' },
  bio: { type: String, default: '' },
  animePrefs: { type: [String], default: [] },
  xp: { type: Number, default: 0 },
  badges: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);