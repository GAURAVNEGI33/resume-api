const db = require("./db");
/**
 * list of all documents
 */

function findAll() {
  const data = db.read();
  return data.documents;
}

/**
 *used to find doc by id
 * @param {} id
 * @returns
 */
function findById(id) {
  const data = db.read();
  return data.documents.find((document) => document.id === id);
}

/**
 * used to create documents
 * @param {} documents
 */

function create(documents) {
  const data = db.read();
  data.documents.push(documents);
  db.write(data);
}

/**
 * used to update document by id read and write
 * @param {} id
 * @param {*} documents
 */

function update(id, documents) {
  const data = db.read();
  const index = data.documents.findIndex((doc) => doc.id === id);
  if (index !== -1) {
    data.documents[index] = documents;
    db.write(data);
  }
}

/**
 * exporting all  functions
 */
module.exports = {
  findAll,
  findById,
  create,
  update,
};
