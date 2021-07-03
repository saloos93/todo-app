import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function FormInput({ setTodos }) {
  const [inputData, setInputData] = useState("");

  function handelAddTodo() {
    setTodos((todos) => {
      return [{ title: inputData, isCompleted: false, id: uuid() }, ...todos];
    });
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
        onClick={handelAddTodo}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
}
