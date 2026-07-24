const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();

// Parse JSON request body
app.use(express.json());

// All API routes start from /api
app.use("/api", routes);

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port`, process.env.PORT);
});
