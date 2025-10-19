# 🧠 React useState() Hook — Explained

This example demonstrates how to use the **`useState()`** hook in React
to manage and update data dynamically inside functional components.

---

## ⚙️ What is `useState()`?

`useState()` is a React Hook that lets your components **remember and
update values** across re-renders.

It returns an **array with two elements**:

```jsx
const [state, setState] = useState(initialValue);
```

- `state` → the current value
- `setState` → a function that updates the value and re-renders the component

---

## 📊 Example: Counter Component

```jsx
const [counter, setCounter] = useState(0);
```

Each time you call `setCounter()`, React re-renders with the updated value:

```jsx
setCounter(counter + 1); // ❌ not recommended
setCounter((prev) => prev + 1); // ✅ recommended (always accurate)
```

---

## ⚠️ Why "old values" appear in console

React updates state **asynchronously** and may batch multiple updates for performance.  
So when you do:

```jsx
setCounter(counter + 1);
console.log(counter);
```

The console still shows the **previous** value — React hasn't re-rendered yet.

✅ You'll see the correct value on screen after re-render.

---

## 🧠 Best Practice

| Goal                          | Best Approach                  |
| ----------------------------- | ------------------------------ |
| Update based on old value     | `setCounter(prev => prev + 1)` |
| Update with a direct value    | `setCounter(5)`                |
| Need updated value in console | Use `useEffect` (covered next) |

---

## 🧩 Summary

- `useState` gives your component memory between renders.
- State changes trigger re-rendering of only that component.
- Always prefer **functional updates** when the new state depends on the old one.
- Seeing old values in console is normal — React updates happen asynchronously.

---

Next step → Learn how to log updated values correctly using **`useEffect()`** 🔁

---

### 🧩 Example 1 — Even Functional Update Doesn’t Show Updated Console Value

```jsx
import React, { useState } from "react";

const StateConsoleExample = () => {
  const [counter, setCounter] = useState(0);

  function increase() {
    // ✅ Correct functional way
    setCounter((prev) => prev + 1);

    // ❌ Still logs old value (because React updates state asynchronously)
    console.log("Counter in console (old):", counter);
  }

  return (
    <>
      <h2>Counter = {counter}</h2>
      <button onClick={increase}>Increase</button>
    </>
  );
};

export default StateConsoleExample;
```

---

### 🧠 Example 2 — How to Get the Correct Updated Value (useEffect preview)

```jsx
import React, { useState, useEffect } from "react";

const CorrectConsoleExample = () => {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((prev) => prev + 1);
  }

  // ✅ This logs the correct updated value after re-render
  useEffect(() => {
    console.log("Counter updated:", counter);
  }, [counter]);

  return (
    <>
      <h2>Counter = {counter}</h2>
      <button onClick={increase}>Increase</button>
    </>
  );
};

export default CorrectConsoleExample;
```
