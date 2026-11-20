const express = require("express");
const tasks = require("./tasks");

const app = express();
const port = process.env.PORT || 3001;

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
