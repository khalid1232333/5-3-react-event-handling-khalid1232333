import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {/* 🆕 If no tasks, show a placeholder */}
      {tasks.length === 0 ? (
        <p className="placeholder">No tasks yet...</p>
      ) : (
        // 🆕 Map over tasks to show TaskItem
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}
