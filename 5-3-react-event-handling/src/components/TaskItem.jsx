import React from "react";

export default function TaskItem({ id, text, onDelete }) {
  return (
    <li className="item">
      {/* 🆕 Display Task Text */}
      <span className="item__text">{text}</span>

      {/* 🆕 Deeeelete Button */}
      <div className="item__actions">
        <button
          className="iconBtn iconBtn--danger"
          aria-label="Delete task"
          title="Delete"
          onClick={() => onDelete(id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

