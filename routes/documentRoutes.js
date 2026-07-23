const express = require("express");
const router = express.Router();

const documentController = require("../controllers/documentController");
const validate = require("../middleware/documentValidator");

router.get("/", documentController.list);
router.post("/", documentController.create);
router.post("/import", documentController.importDocument);
router.get("/:id", validate, documentController.findOne);
router.put("/:id", validate, documentController.update);
router.post("/:id/duplicate", validate, documentController.duplicate);
router.delete("/:id", validate, documentController.remove);

module.exports = router;
