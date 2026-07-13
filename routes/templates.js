const express = require('express');
const router = express.Router();

// GET /api/templates
router.get('/', (req, res) => {
  res.status(200).json([
    { id: 't1', name: 'Classic', description: 'Clean single column layout' },
    { id: 't2', name: 'Modern', description: 'Two column with sidebar' },
    { id: 't3', name: 'Minimal', description: 'Simple and clean' }
  ]);
});

// GET /api/templates/:id
router.get('/:id', (req, res) => {
  res.status(200).json({ id: req.params.id, name: 'Mock Template' });
});

module.exports = router;
