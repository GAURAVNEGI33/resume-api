const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "data.json");

function read() {
  const text = fs.readFileSync(file, "utf-8");
  return JSON.parse(text);
}

function write(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

module.exports = {
  read,
  write,
};
