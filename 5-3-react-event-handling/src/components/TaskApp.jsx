import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  // ✅ Step 1: State for controlled input
  const [text, setText] = useState("");

  // ✅ Step 2: New state to hold all tasks
  const [tasks, setTasks] = useState([]);

  // ✅ Step 3: Handle adding a new task
  const handleSubmit = () => {
    // Don’t allow empty input
    if (text.trim() === "") return;

    // Add new tasSk object { id, text }
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: text.trim() },
    ]);

    // Clear input after submission
    setText("");
  };

  // ✅ Step 4: Handle deleting a task by id
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // ✅ Step 5: Clear all tasks
  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <section className="card">
      {/* Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* Display current input (optional for debugging) */}
      {/* <p>{text}</p> */}

      {/* ✅ Step 6: Pass tasks and delete handler as props */}
      <TaskList tasks={tasks} onDelete={handleDelete} />

      {/* Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
