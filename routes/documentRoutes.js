const express = require("express");
const router = express.Router();

const documentController = require("../controllers/documentController");
const validate = require("../middleware/documentValidator");

// Test route
router.get("/", documentController.list);
router.get("/:id", validate, documentController.findOne);
router.post("/", documentController.create);

module.exports = router;
