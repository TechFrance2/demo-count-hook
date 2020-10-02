import React, { Component, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <h1 className="text">You clicked {count} times</h1>
      <button onClick={incrementCount}> Click Me </button>
    </div>
  );
}

export default App;
