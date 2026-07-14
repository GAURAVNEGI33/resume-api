const express = require('express');
const router = express.Router();
const {
  getAllDocuments,
  createDocument,
  importDocument,
  getDocumentById,
  updateDocument,
  duplicateDocument,
  deleteDocument,
  addSection,
  updateSection,
  deleteSection,
  addItem,
  updateItem,
  deleteItem,
  getVersions,
  saveVersion,
  restoreVersion
} = require('../controllers/documentController');

router.get('/', getAllDocuments);
router.post('/', createDocument);
router.post('/import', importDocument);
router.get('/:id', getDocumentById);
router.put('/:id', updateDocument);
router.post('/:id/duplicate', duplicateDocument);
router.delete('/:id', deleteDocument);
router.post('/:id/sections', addSection);
router.patch('/:id/sections/:sectionId', updateSection);
router.delete('/:id/sections/:sectionId', deleteSection);
router.post('/:id/sections/:sectionId/items', addItem);
router.patch('/:id/sections/:sectionId/items/:itemId', updateItem);
router.delete('/:id/sections/:sectionId/items/:itemId', deleteItem);
router.get('/:id/versions', getVersions);
router.post('/:id/versions', saveVersion);
router.post('/:id/versions/:versionId/restore', restoreVersion);

module.exports = router;