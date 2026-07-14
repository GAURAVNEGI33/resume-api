const fs = require('fs');

function readData() {
  return JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
}

exports.getAllDocuments = (req, res) => {
  const data = readData();
  res.status(200).json(data.documents);
};

exports.createDocument = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  const data = readData();
  const newDoc = { id: Date.now().toString(), title, content: {}, createdAt: new Date().toISOString() };
  data.documents.push(newDoc);
  writeData(data);
  res.status(201).json({ message: 'Document created', document: newDoc });
};

exports.importDocument = (req, res) => {
  res.status(201).json({ message: 'Document imported' });
};

exports.getDocumentById = (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  res.status(200).json(doc);
};

exports.updateDocument = (req, res) => {
  const { title } = req.body;
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  doc.title = title || doc.title;
  writeData(data);
  res.status(200).json({ message: 'Document updated', document: doc });
};

exports.duplicateDocument = (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  const copy = { ...doc, id: Date.now().toString(), title: doc.title + ' (Copy)' };
  data.documents.push(copy);
  writeData(data);
  res.status(201).json({ message: 'Document duplicated', document: copy });
};

exports.deleteDocument = (req, res) => {
  const data = readData();
  const index = data.documents.findIndex(d => d.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Document not found' });
  data.documents.splice(index, 1);
  writeData(data);
  res.status(204).send();
};

exports.addSection = (req, res) => res.status(201).json({ message: 'Section added' });
exports.updateSection = (req, res) => res.status(200).json({ message: 'Section updated' });
exports.deleteSection = (req, res) => res.status(204).send();
exports.addItem = (req, res) => res.status(201).json({ message: 'Item added' });
exports.updateItem = (req, res) => res.status(200).json({ message: 'Item updated' });
exports.deleteItem = (req, res) => res.status(204).send();
exports.getVersions = (req, res) => res.status(200).json([]);
exports.saveVersion = (req, res) => res.status(201).json({ message: 'Version saved' });
exports.restoreVersion = (req, res) => res.status(200).json({ message: 'Version restored' });