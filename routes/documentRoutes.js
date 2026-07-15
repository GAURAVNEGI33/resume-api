const express = require("express");
const router = express.Router();

const controller = require("../controllers/documentController");

// Test route
router.get("/hello", controller.hello);

module.exports = router;
