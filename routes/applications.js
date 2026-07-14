const express = require('express');
const router = express.Router();
const {
  getAllApplications,
  createApplication,
  updateApplicationStatus,
  deleteApplication
} = require('../controllers/applicationController');

router.get('/', getAllApplications);
router.post('/', createApplication);
router.patch('/:id', updateApplicationStatus);
router.delete('/:id', deleteApplication);

module.exports = router;
