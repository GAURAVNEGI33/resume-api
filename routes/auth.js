const express = require('express');
const router = express.Router();
const fs = require('fs');

function readData() {
  return JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields required' });
  }
  const data = readData();
  const newUser = { id: Date.now().toString(), name, email, password };
  data.users.push(newUser);
  writeData(data);
  res.status(201).json({ message: 'Account created', user: newUser });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const data = readData();
  const user = data.users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  res.status(200).json({ message: 'Login successful', token: 'mock-token-' + user.id });
});

router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

router.post('/forgot-password', (req, res) => {
  res.status(200).json({ message: 'Reset link sent' });
});

router.post('/reset-password', (req, res) => {
  res.status(200).json({ message: 'Password reset successful' });
});

module.exports = router;
