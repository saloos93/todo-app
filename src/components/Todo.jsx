import React from "react";

export default function Todo({ todo, dispatchTodos }) {
  return (
    <li className={todo.isCompleted ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.isCompleted}
            onClick={() =>
              dispatchTodos({ type: "changeStatus", payload: todo })
            }
          />
          {todo.title}
          <i className="input-helper"> </i>
        </label>
      </div>
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => dispatchTodos({ type: "delete", payload: todo })}
      ></i>
    </li>
  );
}
