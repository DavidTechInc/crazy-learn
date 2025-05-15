const User = require('../models/User');

// Create new user profile
exports.createUser = async (req, res) => {
  try {
    const { username, avatar, bio, animePrefs } = req.body;
    const user = new User({ username, avatar, bio, animePrefs });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user profile by username
exports.getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user profile by username
exports.updateUser = async (req, res) => {
  try {
    const { avatar, bio, animePrefs } = req.body;
    const user = await User.findOneAndUpdate(
      { username: req.params.username },
      { avatar, bio, animePrefs },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete user profile by username
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ username: req.params.username });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};