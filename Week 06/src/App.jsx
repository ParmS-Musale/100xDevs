import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [id, setId] = useState(1);
  const [todos, setTodos] = useState([]); // Move state inside App function

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/todos/${id}`) // Use backticks for string interpolation
      .then((response) => {
        setTodos([response.data]); // Store single todo as array
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, [id]);

  return (
    <div>
      {/* Fix button handlers */}
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <button onClick={() => setId(5)}>5</button>

      {/* Render todos */}
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} title={todo.todo} mark={todo.completed} />
        ))}
      </div>
    </div>
  );
}

// Fix `Todo` component to match API response
function Todo({ title, mark }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{mark ? "✅ Completed" : "❌ Not Completed"}</p>
    </div>
  );
}

export default App;
