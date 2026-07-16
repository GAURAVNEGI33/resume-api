const express = require("express");
const router = express.Router();

const controller = require("../controllers/documentController");

// Test route
router.get("/", documentController.list);
router.get("/:id", validate, documentController.findOne);
router.post("/", documentController.create);

module.exports = router;
