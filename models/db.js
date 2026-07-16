const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");
const file = path.join(_dirname, "..", "data.json");

function read() {
  const text = fs.readFileSync(file, utf - 8);
  return json.parse(text);
}

function write(data) {
  fs.writeFileSync(file, json.stringfy(data, null, 2));
}

module.exports = {
  read,
  write,
};
