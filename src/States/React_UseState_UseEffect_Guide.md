# 🧠 Mastering `useState()` and `useEffect()` in React

---

## ⚙️ Overview

React’s **`useState()`** and **`useEffect()`** are the **core building blocks** of modern functional components.  
They manage **data (state)** and **side effects (behavior outside rendering)** in your app.

Understanding them deeply will make you confident in handling everything — from counters to complex API calls.

---

## 🎯 1. What is `useState()`?

`useState()` allows you to **store and update data** that affects your component’s UI.

### ✅ Example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initialize state

  const increment = () => setCount(count + 1);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
    </>
  );
}

export default Counter;
```

---

### 💬 How it works:

- **`useState()`** returns an **array** → `[currentValue, updaterFunction]`
- When you call `setCount()`, React **schedules** a re-render, it doesn’t change it immediately.
- That’s why if you log right after `setCount()`, you still see the **old value** in the console.

---

### ⚠️ Common Confusion: Why old value in console?

```jsx
setCount(count + 1);
console.log(count); // prints old value!
```

**Reason:**  
React batches state updates for performance.  
`setCount()` doesn’t change it instantly; it just tells React — “Hey, on next render, update this!”

---

### ✅ The Correct Way (Functional Update)

If your new state depends on the previous one — always use a **callback form**:

```jsx
setCount((prev) => prev + 1);
```

This ensures you always get the latest value, even during multiple updates.

---

## 🧭 2. What is `useEffect()`?

`useEffect()` handles **side effects** — anything that happens **outside** React’s render cycle.

Examples:

- Fetching data
- Updating the DOM manually
- Working with localStorage
- Setting timers or event listeners

---

### ✅ Basic Example:

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // runs every time `count` changes

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </>
  );
}
```

---

## 🔁 3. Why useEffect runs twice (in React 18+)

If you’re using React 18 in **development mode**, you’ll see your `useEffect()` run **twice**.

Example:

```jsx
useEffect(() => {
  console.log("Effect running...");
}, []);
```

Output:

```
Effect running...
Effect running...
```

### 🧩 Reason:

React 18’s **Strict Mode** intentionally runs some effects twice **in development only** (not production).

This helps detect **unintended side effects** like:

- Missing cleanup functions
- Incorrect dependencies
- Non-idempotent logic (doing the same thing twice causing issues)

✅ **Don’t worry** — it runs **only once in production** builds.

---

## 🧹 4. Cleanup in `useEffect()`

When your component **unmounts** or **re-runs** an effect, React can **clean up** previous effects.

### Example:

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running every second...");
  }, 1000);

  return () => {
    clearInterval(interval); // cleanup on unmount or re-render
    console.log("Cleanup done!");
  };
}, []);
```

🧽 **Cleanup** prevents memory leaks or unwanted behavior.

---

## 🎯 5. Dependency Array — `[ ]`

The **second parameter** of `useEffect()` controls **when it runs**:

| Dependency Array | Runs When                                |
| ---------------- | ---------------------------------------- |
| `[]`             | Only once (on mount)                     |
| `[count]`        | Whenever `count` changes                 |
| _No array_       | On every render (⚠️ avoid unless needed) |

---

## 🧩 6. Combining `useState` + `useEffect`

Here’s a common pattern:

- `useState` → stores data
- `useEffect` → reacts to changes or fetches data

### Example:

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); // runs once on mount

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <p key={item.id}>{item.title}</p>)
      )}
    </>
  );
}
```

---

## 🔍 7. Summary — `useState` vs `useEffect`

| Hook          | Purpose                                      | When It Runs                            | Common Use                  |
| ------------- | -------------------------------------------- | --------------------------------------- | --------------------------- |
| `useState()`  | Store data that changes over time            | On user interaction or logic            | Counters, inputs, toggles   |
| `useEffect()` | Handle side effects or run code after render | After render / when dependencies change | Fetching data, timers, APIs |

---

## 💡 8. Best Practices

✅ Always use **functional updates** if new state depends on the old one.  
✅ Always **cleanup** your effects.  
✅ Avoid infinite loops by properly setting dependency arrays.  
✅ Don’t mutate state directly (never `count++` or `state.push()`).  
✅ For complex states → use `useReducer`.  
✅ For performance → use `useMemo` or `React.memo`.

---

## 🚀 9. Common Mistakes & Fixes

| Mistake                        | Why It Happens            | Fix                                                   |
| ------------------------------ | ------------------------- | ----------------------------------------------------- |
| `useEffect` runs infinitely    | Missing dependency array  | Add `[]` or proper deps                               |
| Old value in console           | React updates state async | Log inside useEffect                                  |
| Double execution in console    | Strict Mode in React 18   | Ignore in dev / remove StrictMode (for learning only) |
| State not updating immediately | React batches updates     | Use callback form                                     |

---

## 🧩 10. Real-Life Example

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect => count:", count);
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    console.log("After setCount, count is still:", count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default Example;
```

🧠 Output in Console:

```
After setCount, count is still: 0
useEffect => count: 1
```

---

## 🧭 11. In Short

| Concept                       | React Behavior                    |
| ----------------------------- | --------------------------------- |
| State updates are async       | You’ll see old value in console   |
| useEffect runs after render   | Safe place to handle side effects |
| React 18 runs twice (dev)     | To catch bugs early               |
| Cleanup prevents memory leaks | Always return a cleanup if needed |

---

## ✨ 12. Conclusion

`useState()` = "store & update UI data"  
`useEffect()` = "react to changes & handle side effects"

Mastering both is the key to understanding **React’s reactivity system**.

Once you’re comfortable with these two hooks, you can confidently explore:

- `useReducer` (complex state)
- `useMemo` (performance)
- `useCallback` (memoized functions)

---

