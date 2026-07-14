const express = require('express');
const router = express.Router();
const fs = require('fs');

function readData() {
  return JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
}

router.get('/', (req, res) => {
  const data = readData();
  res.status(200).json(data.templates);
});

router.get('/:id', (req, res) => {
  const data = readData();
  const template = data.templates.find(t => t.id === req.params.id);
  if (!template) return res.status(404).json({ error: 'Template not found' });
  res.status(200).json(template);
});

module.exports = router;