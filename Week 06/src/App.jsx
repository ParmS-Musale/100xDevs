import { useState } from "react";
import "./App.css";

let count = 4;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", description: "Learn React" },
    { id: 2, title: "Learn Firebase", description: "Learn Firebase" },
    { id: 3, title: "Learn Node.js", description: "Learn Node.js" },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      { id: count++, title: Math.random(), description: Math.random() },
    ]);
  }
  return (
    <>
      <div>
        <button onClick={addTodo}>Add a Todo</button>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default App;
