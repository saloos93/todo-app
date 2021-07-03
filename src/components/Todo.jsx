import React from "react";

export default function Todo({ todo, handleChangeTodostatus, handleDelete }) {
  return (
    <li className={todo.isCompleted ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.isCompleted}
            onClick={() => handleChangeTodostatus(todo.id)}
          />
          {todo.title}
          <i className="input-helper"> </i>
        </label>
      </div>
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => handleDelete(todo.id)}
      ></i>
    </li>
  );
}
