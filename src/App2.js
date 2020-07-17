import React, { useState } from "react";

function App2() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(true);
    setRed(!isRed);
  };
  return (
    <div className="app2">
      <h1 className={isRed ? "red" : "blue"}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App2;
