const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/user.controller');
const { registerUserValidator, loginUserValidator } = require('../middleware/validator.middleware');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes
router.post('/register', registerUserValidator, registerUser);
router.post('/login', loginUserValidator, loginUser);

// Protected routes
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userModel = require('../models/user.model');
    const user = await userModel.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;