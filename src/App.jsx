import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

const initialValues = [
  { id: 1, title: "Buy Milk", isCompleted: true },
  { id: 2, title: "Buy Car", isCompleted: false },
  { id: 3, title: "Buy table", isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState(initialValues);

  function handleDelete(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function handleChangeTodostatus(todoId) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <TodoInput setTodos={setTodos} />
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  {todos.map((todo) => (
                    <Todo
                      handleChangeTodostatus={handleChangeTodostatus}
                      handleDelete={handleDelete}
                      todo={todo}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
