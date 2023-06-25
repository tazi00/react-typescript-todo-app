import { useEffect, useState } from "react";
import TodoWrappper from "./Components/TableWrapper";
import Actions from "./Components/Actions";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

export interface Todo {
  id: string;
  completed: false;
  todo: string;
  desc: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[] | (() => [])>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("Add some Todos");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos?.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "notCompleted") {
      return !todo.completed;
    }
    return true;
  });
  function handleSend(todo: Todo) {
    setTodos((prev) => [...prev, todo]);
    setMessage("No todos");
    console.log(todos);
  }

  function handleClear() {
    setTodos([]);
  }
  // handle the completed and not complted checked
  function handleCompleted(id: string) {
    console.log(id);
    setTodos(
      todos?.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }
  // delete the todo data
  function handleDelete(id: string) {
    setTodos((prev) => prev?.filter((p) => p.id !== id));
  }

  // update the todo data
  function handleSetData(id: string, newData: object) {
    setTodos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, todo: newData?.text1, desc: newData?.text2 } : p
      )
    );
  }

  return (
    <>
      <TodoWrappper className="todos">
        <TodoForm handleSend={handleSend} />
        {todos.length !== 0 && (
          <Actions setFilter={setFilter} handleClear={handleClear} />
        )}

        {todos.length === 0 ? (
          <h3>{message}</h3>
        ) : (
          <Todos
            todos={filteredTodos}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
            handleSetData={handleSetData}
          />
        )}
      </TodoWrappper>
    </>
  );
}

// edit box

export default App;
