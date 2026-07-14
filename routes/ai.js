const express = require('express');
const router = express.Router();
const { generateBullets, generateSummary, rewriteText, applyPrompt } = require('../controllers/aiController');

router.post('/bullets', generateBullets);
router.post('/summary', generateSummary);
router.post('/rewrite', rewriteText);
router.post('/prompt', applyPrompt);

module.exports = router;