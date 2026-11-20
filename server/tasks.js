const fs = require("fs");
const path = require("path");

const taskDirectory = path.join(__dirname, "..", "tasks");

function readTaskMarkdown(taskFolder) {
  return fs.readFileSync(path.join(taskDirectory, taskFolder, "task.md"), "utf8");
}

const tasks = [
  {
    id: "task-1",
    title: "Fix Invoice Calculation",
    type: "language-driven",
    difficulty: "Easy",
    statement: readTaskMarkdown("task-1"),
    environment: "Node.js 22, terminal"
  },
  {
    id: "task-2",
    title: "Process Completed Orders",
    type: "outcome-driven",
    difficulty: "Easy",
    statement: readTaskMarkdown("task-2"),
    environment: "Node.js 22, terminal"
  }
];

module.exports = tasks;
