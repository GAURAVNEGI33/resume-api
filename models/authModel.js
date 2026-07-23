const db = require("./db");

/**
 * Get all users
 */
function findAll() {
  const data = db.read();
  return data.users;
}

/**
 * Find user by email
 * @param {*} email
 */
function findByEmail(email) {
  const data = db.read();
  return data.users.find((user) => user.email === email);
}

/**
 * Find user by id
 * @param {*} id
 */
function findById(id) {
  const data = db.read();
  return data.users.find((user) => user.id === id);
}

/**
 * Create a new user
 * @param {*} user
 */
function create(user) {
  const data = db.read();
  data.users.push(user);
  db.write(data);
}

/**
 * Update user by id
 * @param {*} id
 * @param {*} user
 */
function update(id, user) {
  const data = db.read();
  const index = data.users.findIndex((u) => u.id === id);
  if (index !== -1) {
    data.users[index] = user;
    db.write(data);
  }
}

/**
 * Remove user by id
 * @param {*} id
 */
function remove(id) {
  const data = db.read();
  const index = data.users.findIndex((u) => u.id === id);
  if (index !== -1) {
    data.users.splice(index, 1);
    db.write(data);
  }
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  update,
  remove,
};
