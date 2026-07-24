const db = require("./db");

function findAll() {
  const data = db.read();
  return data.documents;
}

function findById(id) {
  const data = db.read();
  return data.documents.find((document) => document.id === id);
}

function create(documents) {
  const data = db.read();
  data.documents.push(documents);
  db.write(data);
}

function update(id, documents) {
  const data = db.read();
  const index = data.documents.findIndex((doc) => doc.id === id);
  if (index !== -1) {
    data.documents[index] = documents;
    db.write(data);
  }
}

function remove(id) {
  const data = db.read();
  const index = data.documents.findIndex((doc) => doc.id === id);
  if (index !== -1) {
    data.documents.splice(index, 1);
    db.write(data);
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
