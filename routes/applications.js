const express = require('express');
const router = express.Router();

// GET /api/applications
router.get('/', (req, res) => {
  res.status(200).json([]);
});

// POST /api/applications
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Application logged' });
});

// PATCH /api/applications/:id
router.patch('/:id', (req, res) => {
  res.status(200).json({ message: 'Status updated' });
});

// DELETE /api/applications/:id
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Application removed' });
});

module.exports = router;