import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <main className="App" style={{ color: color ? "red" : "green" }}>
      <div className="container">
        <input
          placeholder="Type Inside ..."
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <br />
        <p>Count: {count}</p>
        <section>
          <button onClick={() => setCount((previous) => previous - 1)}>
            -
          </button>
          <button onClick={() => setCount((previous) => previous - 1)}>
            +
          </button>
          <button onClick={() => setColor((previous) => !previous)}>
            Color
          </button>
        </section>
        <br />
        <br />
        <p>{userInput}</p>
      </div>
    </main>
  );
}

export default App;
