import React, { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation
// (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

const Assignment1 = () => {
  const [input, setInput] = useState(0);
  // console.log("Assignment1 Rendered");
  
  const CalculatedValue = useMemo(() => {
    let fact = 1;
    for (let i = 1; i <= input; i++) {
      fact = fact * i;
    }
    return fact;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>Calculated Values : {CalculatedValue}</p>
    </div>
  );
};

export default Assignment1;
