const express = require('express');
const router = express.Router();
const fs = require('fs');

function readData() {
  return JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

router.get('/me', (req, res) => {
  const data = readData();
  const user = data.users[0];
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
});

router.put('/me', (req, res) => {
  const { name, email } = req.body;
  const data = readData();
  if (data.users.length === 0) return res.status(404).json({ error: 'User not found' });
  data.users[0].name = name || data.users[0].name;
  data.users[0].email = email || data.users[0].email;
  writeData(data);
  res.status(200).json({ message: 'Profile updated', user: data.users[0] });
});

router.delete('/me', (req, res) => {
  const data = readData();
  data.users = [];
  writeData(data);
  res.status(204).send();
});

module.exports = router;