const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  res.status(201).json({ message: 'Account created' });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login successful', token: 'mock-token-123' });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

// POST /api/auth/forgot-password
router.post('/forgot-password', (req, res) => {
  res.status(200).json({ message: 'Reset link sent' });
});

// POST /api/auth/reset-password
router.post('/reset-password', (req, res) => {
  res.status(200).json({ message: 'Password reset successful' });
});

module.exports = router;