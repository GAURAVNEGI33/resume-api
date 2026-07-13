const express = require('express');
const router = express.Router();

// GET /api/users/me
router.get('/me', (req, res) => {
  res.status(200).json({ id: '1', name: 'Gaurav Negi', email: 'gaurav@email.com' });
});

// PUT /api/users/me
router.put('/me', (req, res) => {
  res.status(200).json({ message: 'Profile updated' });
});

// DELETE /api/users/me
router.delete('/me', (req, res) => {
  res.status(200).json({ message: 'Account deleted' });
});

module.exports = router;