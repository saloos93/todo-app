import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function FormInput({ dispatchTodos }) {
  const [inputData, setInputData] = useState("");

  function handleAddTodo() {
    dispatchTodos({
      type: "add",
      payload: { id: uuid(), title: inputData, isCompleted: false },
    });
    setInputData("");
  }

  return (
    <div className="add-items d-flex">
      <input
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
      />
      <button
        onClick={handleAddTodo}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
}
