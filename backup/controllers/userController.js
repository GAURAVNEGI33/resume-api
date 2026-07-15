const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data.json');

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

exports.getMe = (req, res) => {
  const data = readData();
  const user = data.users[0];
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
};

exports.updateMe = (req, res) => {
  const { name, email } = req.body;
  const data = readData();
  if (data.users.length === 0) return res.status(404).json({ error: 'User not found' });
  data.users[0].name = name || data.users[0].name;
  data.users[0].email = email || data.users[0].email;
  writeData(data);
  res.status(200).json({ message: 'Profile updated', user: data.users[0] });
};

exports.deleteMe = (req, res) => {
  const data = readData();
  data.users = [];
  writeData(data);
  res.status(204).send();
};
