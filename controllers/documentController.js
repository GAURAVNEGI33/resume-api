// Send a simple response
function hello(req, res) {
  res.json({
    message: "Hello from documents",
  });
}

module.exports = {
  hello,
};
