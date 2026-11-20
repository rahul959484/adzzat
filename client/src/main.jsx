import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load tasks");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setSelectedTask(data[0] || null);
      })
      .catch((requestError) => setError(requestError.message));
  }, []);

  return (
    <main className="page">
      <header>
        <p className="eyebrow">Adzzat Labs take-home project</p>
        <h1>Coding Tasks</h1>
      </header>

      {error && <p className="error">{error}</p>}

      <div className="layout">
        <section className="task-list" aria-label="Task list">
          {tasks.map((task) => (
            <button
              type="button"
              className={selectedTask?.id === task.id ? "task-card selected" : "task-card"}
              key={task.id}
              onClick={() => setSelectedTask(task)}
            >
              <span className="task-id">{task.id}</span>
              <strong>{task.title}</strong>
              <span>{task.type}</span>
              <span className="difficulty">{task.difficulty}</span>
            </button>
          ))}
        </section>

        {selectedTask && (
          <article className="detail">
            <p className="task-id">{selectedTask.id}</p>
            <h2>{selectedTask.title}</h2>
            <div className="metadata">
              <span>{selectedTask.type}</span>
              <span>{selectedTask.difficulty}</span>
              <span>{selectedTask.environment}</span>
            </div>
            <pre>{selectedTask.statement}</pre>
          </article>
        )}
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
