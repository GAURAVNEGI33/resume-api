const express = require('express');
const router = express.Router();

// GET /api/documents
router.get('/', (req, res) => {
  res.status(200).json([]);
});

// POST /api/documents
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Document created' });
});

// POST /api/documents/import
router.post('/import', (req, res) => {
  res.status(201).json({ message: 'Document imported' });
});

// GET /api/documents/:id
router.get('/:id', (req, res) => {
  res.status(200).json({ id: req.params.id, title: 'Mock Document' });
});

// PUT /api/documents/:id
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Document updated' });
});

// POST /api/documents/:id/duplicate
router.post('/:id/duplicate', (req, res) => {
  res.status(201).json({ message: 'Document duplicated' });
});

// DELETE /api/documents/:id
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Document deleted' });
});

// POST /api/documents/:id/sections
router.post('/:id/sections', (req, res) => {
  res.status(201).json({ message: 'Section added' });
});

// PATCH /api/documents/:id/sections/:sectionId
router.patch('/:id/sections/:sectionId', (req, res) => {
  res.status(200).json({ message: 'Section updated' });
});

// DELETE /api/documents/:id/sections/:sectionId
router.delete('/:id/sections/:sectionId', (req, res) => {
  res.status(200).json({ message: 'Section removed' });
});

// POST /api/documents/:id/sections/:sectionId/items
router.post('/:id/sections/:sectionId/items', (req, res) => {
  res.status(201).json({ message: 'Item added' });
});

// PATCH /api/documents/:id/sections/:sectionId/items/:itemId
router.patch('/:id/sections/:sectionId/items/:itemId', (req, res) => {
  res.status(200).json({ message: 'Item updated' });
});

// DELETE /api/documents/:id/sections/:sectionId/items/:itemId
router.delete('/:id/sections/:sectionId/items/:itemId', (req, res) => {
  res.status(200).json({ message: 'Item removed' });
});

// GET /api/documents/:id/versions
router.get('/:id/versions', (req, res) => {
  res.status(200).json([]);
});

// POST /api/documents/:id/versions
router.post('/:id/versions', (req, res) => {
  res.status(201).json({ message: 'Version saved' });
});

// POST /api/documents/:id/versions/:versionId/restore
router.post('/:id/versions/:versionId/restore', (req, res) => {
  res.status(200).json({ message: 'Version restored' });
});

module.exports = router;