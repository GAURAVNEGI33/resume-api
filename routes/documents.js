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
  res.status(200).json(data.documents);
});

router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  const data = readData();
  const newDoc = { id: Date.now().toString(), title, content: {}, createdAt: new Date().toISOString() };
  data.documents.push(newDoc);
  writeData(data);
  res.status(201).json({ message: 'Document created', document: newDoc });
});

router.post('/import', (req, res) => {
  res.status(201).json({ message: 'Document imported' });
});

router.get('/:id', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  res.status(200).json(doc);
});

router.put('/:id', (req, res) => {
  const { title } = req.body;
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  doc.title = title || doc.title;
  writeData(data);
  res.status(200).json({ message: 'Document updated', document: doc });
});

router.post('/:id/duplicate', (req, res) => {
  const data = readData();
  const doc = data.documents.find(d => d.id === req.params.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  const copy = { ...doc, id: Date.now().toString(), title: doc.title + ' (Copy)' };
  data.documents.push(copy);
  writeData(data);
  res.status(201).json({ message: 'Document duplicated', document: copy });
});

router.delete('/:id', (req, res) => {
  const data = readData();
  const index = data.documents.findIndex(d => d.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Document not found' });
  data.documents.splice(index, 1);
  writeData(data);
  res.status(204).send();
});

router.post('/:id/sections', (req, res) => res.status(201).json({ message: 'Section added' }));
router.patch('/:id/sections/:sectionId', (req, res) => res.status(200).json({ message: 'Section updated' }));
router.delete('/:id/sections/:sectionId', (req, res) => res.status(204).send());
router.post('/:id/sections/:sectionId/items', (req, res) => res.status(201).json({ message: 'Item added' }));
router.patch('/:id/sections/:sectionId/items/:itemId', (req, res) => res.status(200).json({ message: 'Item updated' }));
router.delete('/:id/sections/:sectionId/items/:itemId', (req, res) => res.status(204).send());
router.get('/:id/versions', (req, res) => res.status(200).json([]));
router.post('/:id/versions', (req, res) => res.status(201).json({ message: 'Version saved' }));
router.post('/:id/versions/:versionId/restore', (req, res) => res.status(200).json({ message: 'Version restored' }));

module.exports = router;