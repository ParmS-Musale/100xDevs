import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>CountGoES</h1>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}

export default App;
