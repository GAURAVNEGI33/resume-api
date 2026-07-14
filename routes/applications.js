const express = require('express');
const router = express.Router();
const fs = require('fs');

function readData() {
  return JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

router.get('/', (req, res) => {
  const data = readData();
  res.status(200).json(data.applications);
});

router.post('/', (req, res) => {
  const { company, role } = req.body;
  if (!company || !role) return res.status(400).json({ error: 'Company and role required' });
  const data = readData();
  const newApp = {
    id: Date.now().toString(),
    company,
    role,
    status: 'applied',
    appliedAt: new Date().toISOString()
  };
  data.applications.push(newApp);
  writeData(data);
  res.status(201).json({ message: 'Application logged', application: newApp });
});

router.patch('/:id', (req, res) => {
  const { status } = req.body;
  const data = readData();
  const app = data.applications.find(a => a.id === req.params.id);
  if (!app) return res.status(404).json({ error: 'Application not found' });
  app.status = status || app.status;
  writeData(data);
  res.status(200).json({ message: 'Status updated', application: app });
});

router.delete('/:id', (req, res) => {
  const data = readData();
  const index = data.applications.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Application not found' });
  data.applications.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

module.exports = router;