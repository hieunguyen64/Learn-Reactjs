import React from "react";
import Hello from "./sayHello";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="Hieu Nguyen" message="this is fucking message react" />
      <Tweet name="Hieu Nguyen2" message="this is fucking message react2" />
      <Tweet name="Hieu Nguyen3" message="this is fucking message react3" />
      <Tweet name="Hieu Nguyen4" message="this is fucking message react4" />
    </div>
  );
}

export default App;
