const express = require("express");
const router = express.Router();

// Connect document routes
router.use("/documents", require("./documentRoutes"));

// Connect auth routes
router.use("/auth", require("./authRoutes"));

module.exports = router;
