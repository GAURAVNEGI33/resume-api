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

function create(req, res) {
  res.send({
    message: "Hello Everyone!",
  });
}

/**
 * Retrieve a document by id
 * @param {*} req
 * @param {*} res
 */
function findOne(req, res) {
  try {
    const id = req.params.id;
    const document = documentModel.findById(id);

    if (!document) {
      return res.status(404).send({
        success: false,
        message: "Document not found.",
      });
    }

    res.send({
      success: true,
      message: "Retrieved the document.",
      document,
    });
  } catch (error) {
    console.log("error in retrieve", error);
    res.status(500).send({
      success: false,
      message: "Failed to retrieve the document.",
    });
  }
}

module.exports = {
  list,
  create,
  findOne,
};
