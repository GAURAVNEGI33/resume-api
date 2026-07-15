const express = require("express");
const router = express.Router();

// Connect document routes
router.use("/documents", require("./documentRoutes"));

module.exports = router;
