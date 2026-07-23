const documentModel = require("../models/documentModel");

function list(req, res) {
  try {
    const documents = documentModel.findAll();
    res.send({
      success: true,
      message: "Retrieved the list of documents.",
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
  try {
    const document = req.body;
    documentModel.create(document);
    res.status(201).send({
      success: true,
      message: "Document created.",
      document,
    });
  } catch (error) {
    console.log("error in create", error);
    res.status(500).send({
      success: false,
      message: "Failed to create document.",
    });
  }
}

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
    console.log("error in findOne", error);
    res.status(500).send({
      success: false,
      message: "Failed to retrieve the document.",
    });
  }
}

function update(req, res) {
  try {
    const id = req.params.id;
    const document = documentModel.findById(id);
    if (!document) {
      return res.status(404).send({
        success: false,
        message: "Document not found.",
      });
    }
    documentModel.update(id, req.body);
    res.send({
      success: true,
      message: "Document updated.",
      document: req.body,
    });
  } catch (error) {
    console.log("error in update", error);
    res.status(500).send({
      success: false,
      message: "Failed to update document.",
    });
  }
}

function remove(req, res) {
  try {
    const id = req.params.id;
    const document = documentModel.findById(id);
    if (!document) {
      return res.status(404).send({
        success: false,
        message: "Document not found.",
      });
    }
    documentModel.remove(id);
    res.status(204).send();
  } catch (error) {
    console.log("error in remove", error);
    res.status(500).send({
      success: false,
      message: "Failed to remove document.",
    });
  }
}

function duplicate(req, res) {
  try {
    const id = req.params.id;
    const document = documentModel.findById(id);
    if (!document) {
      return res.status(404).send({
        success: false,
        message: "Document not found.",
      });
    }
    const copy = {
      ...document,
      id: Date.now().toString(),
      title: document.title + " (Copy)",
    };
    documentModel.create(copy);
    res.status(201).send({
      success: true,
      message: "Document duplicated.",
      document: copy,
    });
  } catch (error) {
    console.log("error in duplicate", error);
    res.status(500).send({
      success: false,
      message: "Failed to duplicate document.",
    });
  }
}

function importDocument(req, res) {
  try {
    const document = req.body;
    documentModel.create(document);
    res.status(201).send({
      success: true,
      message: "Document imported.",
      document,
    });
  } catch (error) {
    console.log("error in importDocument", error);
    res.status(500).send({
      success: false,
      message: "Failed to import document.",
    });
  }
}

module.exports = {
  list,
  create,
  findOne,
  update,
  remove,
  duplicate,
  importDocument,
};
