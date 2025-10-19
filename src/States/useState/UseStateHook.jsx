// 📘 UseStateHook.jsx
// Demonstrates useState() in React to manage dynamic data in functional components.

import React, { useState } from "react";

const UseStateHook = () => {
  // 🧩 Declaring multiple state variables
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState([]); // array state example
  const [float, setFloat] = useState("12.123"); // string representing float
  const [name, setName] = useState("Saad");

  // ⚙️ Increase counter (using functional update)
  const increase = () => {
    setCounter((prev) => prev + 1); // ✅ safest form
    console.log("Counter =", counter); // logs old value (state is async)
  };

  // ⚙️ Decrease counter (using functional update)
  const decrease = () => {
    setCounter((prev) => prev - 1);
    console.log("Counter =", counter);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>🧠 Understanding useState()</h1>

      <h2>Counter = {counter}</h2>

      <div>
        <button onClick={increase}>Increase Counter</button>
        <button onClick={decrease} style={{ marginLeft: "10px" }}>
          Decrease Counter
        </button>
      </div>

      <hr />

      <h3>📘 Key Notes:</h3>
      <ul>
        <li>
          <code>useState()</code> lets a functional component hold data that can
          change over time.
        </li>
        <li>
          React re-renders the component whenever the state changes to reflect
          the new value.
        </li>
        <li>
          <b>Functional updates</b> like{" "}
          <code>setCounter(prev =&gt; prev + 1)</code> are the most reliable way
          to update state based on its previous value.
        </li>
        <li>
          <b>Direct updates</b> like <code>setCounter(counter + 1)</code> may
          fail when multiple updates happen quickly.
        </li>
        <li>
          Even if you see the old value in console logs, the screen shows the
          updated value — this happens because React state updates are{" "}
          <b>asynchronous</b>.
        </li>
      </ul>

      <h4>
        🧩 You’ll learn how to fix the “old value in console” problem using{" "}
        <code>useEffect()</code> in the next step.
      </h4>
    </div>
  );
};

export default UseStateHook;
