const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data.json');

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
}

exports.getAllTemplates = (req, res) => {
  const data = readData();
  res.status(200).json(data.templates);
};

exports.getTemplateById = (req, res) => {
  const data = readData();
  const template = data.templates.find(t => t.id === req.params.id);
  if (!template) return res.status(404).json({ error: 'Template not found' });
  res.status(200).json(template);
};
