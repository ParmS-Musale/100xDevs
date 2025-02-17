import React, { useState } from 'react'

const Assignment1 = () => {
// Create a counter component with increment and decrement functions. Pass these functions to a child
// component which has buttons to perform the increment and decrement actions. Use useCa11back to ensure
// that these functions are not recreated on every render.

const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Assignment 1</h1>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Assignment1