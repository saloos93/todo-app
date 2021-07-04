import React, { useReducer } from "react";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

const initialValues = [
  { id: 1, title: "Buy Milk", isCompleted: true },
  { id: 2, title: "Buy Car", isCompleted: false },
  { id: 3, title: "Buy table", isCompleted: false },
];

function todosReducer(todos, action) {
  const todo = action.payload;
  switch (action.type) {
    case "add": {
      return [todo, ...todos];
    }

    case "changeStatus": {
      return todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      });
    }

    case "delete": {
      return todos.filter((item) => item.id !== todo.id);
    }

    default:
      return todos;
  }
}

function App() {
  const [todos, dispatchTodos] = useReducer(todosReducer, initialValues);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Awesome Todo list</h4>
              <TodoInput dispatchTodos={dispatchTodos} todos={todos} />
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  {todos.map((todo) => (
                    <Todo dispatchTodos={dispatchTodos} todo={todo} />
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
