const documentModels = require("../models, /documentModel");

/**
 * Retrieve the list of documents
 * @param {*} req
 * @param {*} res
 */

function list(req, res) {
  try {
    const documents = documentModel.findAll();
    res.send({
      success: true,
      message: "Retrieve the list of documents.",
      documents: documents,
    });
  } catch (error) {
    console.log("error in list", error);
    res.status(500).send({
      success: false,
      message: "Failed to retrieve the list of documents.",
    });
  }
}
