const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data.json');

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });
  const data = readData();
  const newUser = { id: Date.now().toString(), name, email, password };
  data.users.push(newUser);
  writeData(data);
  res.status(201).json({ message: 'Account created', user: newUser });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const data = readData();
  const user = data.users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  res.status(200).json({ message: 'Login successful', token: 'mock-token-' + user.id });
};

exports.logout = (req, res) => res.status(200).json({ message: 'Logged out successfully' });
exports.forgotPassword = (req, res) => res.status(200).json({ message: 'Reset link sent' });
exports.resetPassword = (req, res) => res.status(200).json({ message: 'Password reset successful' });
