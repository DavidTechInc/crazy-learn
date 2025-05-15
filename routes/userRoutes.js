const express = require('express');
const router = express.Router();
const {
  createUser,
  getUserByUsername,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.post('/', createUser);
router.get('/:username', getUserByUsername);
router.put('/:username', updateUser);
router.delete('/:username', deleteUser);

module.exports = router;