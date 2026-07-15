const express = require("express");
const routes = require("./routes");

const app = express();

// Parse JSON request body
app.use(express.json());

// All API routes start from /api
app.use("/api", routes);

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
