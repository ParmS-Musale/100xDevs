// Create a component with a text input field and a button. The goal is to display an alert with the
// text entered when the button is clicked. Use useCaIIback to memoize the event handler function that
// triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText a a state variable and hence you might not see the benefits of
//  useCaItback. We're also not passi it down to another component as a prop which is another reason
// for you to not see it's benefits immedietely.

import React, { useCallback, useState } from "react";

const Assignment2 = () => {
  const [inputText, setInputText] = useState("");

  // Correctly using useCallback
  const showAlert = useCallback(() => {
    alert(inputText);
  }, [inputText]); // Memoized function

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here"
      />
      <button onClick={showAlert}>Alert</button> {/* Corrected onClick */}
    </div>
  );
};

export default Assignment2;
