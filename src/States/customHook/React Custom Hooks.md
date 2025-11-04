# ⚙️ React Custom Hooks -- The Complete Guide (Beginner to Pro)

This guide helps you **understand, create, and use custom React hooks**
effectively --- not just what they are, but **why**, **when**, and
**how** to use them.

Whether you're a beginner or an experienced React developer, this README
explains the fundamentals and best practices for writing reusable,
scalable, and clean hook-based logic.

---

## 🧠 What Are Custom Hooks?

Custom hooks are **reusable JavaScript functions** built using React's
built-in hooks (like `useState`, `useEffect`, etc.).\
They let you extract component logic into **independent, reusable
units**.

### Example:

If multiple components in your app fetch data from an API, instead of
writing the same fetching logic in each component, you can write a
**custom hook** (e.g., `useFetchData`) and reuse it everywhere.

---

## ❓ Why Use Custom Hooks?

### 🔹 1. Reusability

You can use the same logic across multiple components without code
duplication.

### 🔹 2. Cleaner Components

Custom hooks separate business logic from UI, making components simpler
and easier to read.

### 🔹 3. Better Testing & Maintenance

Logic is isolated, so it's easier to test and maintain.

### 🔹 4. Scalability

When your project grows, hooks keep your code modular and consistent.

---

## 🕐 When to Create a Custom Hook?

Create a custom hook when: - You use the same hook logic (e.g., data
fetching, event handling, timers) in more than one component. - A
component becomes too large due to repeated logic. - You want to share
non-UI logic between components.

### Example Scenarios:

Situation Built-in Hook Custom Hook Example

---

Fetching API data `useEffect` + `useState` `useFetchData`
Handling form input `useState` `useForm`
Tracking window size `useEffect` `useWindowSize`
Managing dark/light theme `useContext` `useTheme`

---

## 🧩 How to Create a Custom Hook

### 🔹 Syntax Overview

```jsx
// ✅ Step 1: Always start the hook name with "use"
export const useCustomHook = () => {
  // ✅ Step 2: Use React's built-in hooks inside it
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Some side-effect logic here
  }, []);

  // ✅ Step 3: Return what you want other components to access
  return { state, setState };
};
```

---

## 🧱 How to Use a Custom Hook

```jsx
import React from "react";
import { useCustomHook } from "./useCustomHook";

const ExampleComponent = () => {
  const { state, setState } = useCustomHook();

  return (
    <div>
      <p>Value: {state}</p>
      <button onClick={() => setState("Updated!")}>Change</button>
    </div>
  );
};

export default ExampleComponent;
```

✅ **Rules:** - Custom hooks **must start with** `use` (like `useFetch`,
`useTheme`) --- it's how React identifies them. - You can use **other
hooks inside** a custom hook (e.g., `useState`, `useEffect`, `useRef`,
`useContext`, etc.). - Custom hooks **should not** directly modify the
DOM or use class-based logic.

---

## 📦 Import & Export Syntax

### Exporting a Hook

You can export it as **named** or **default** export.

```js
// Named export
export const useFetch = () => { ... }

// Default export
export default useFetch;
```

### Importing a Hook

```js
// Named import
import { useFetch } from "./useFetch";

// Default import
import useFetch from "./useFetch";
```

---

## ⚡ Pro Tips

1.  **Keep it specific:** Name hooks based on purpose (e.g.,
    `useLocalStorage`, `useAuth`, `useDebounce`).
2.  **Return only necessary values:** Don't return everything --- keep
    the API clean.
3.  **Use try/catch inside hooks** for safe asynchronous operations.
4.  **Avoid side-effects** in the returned values or functions.
5.  **Test hooks independently** using tools like
    `@testing-library/react-hooks`.

---

## 🧪 Example Custom Hooks

### useWindowSize

```js
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
```

### useFetchData

```js
import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error fetching data");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
```

---

## 🧰 Best Practices

✅ Do ❌ Don't

---

Use `use` prefix Write custom hooks in class components
Keep logic generic Return unnecessary data
Handle cleanup in `useEffect` Access DOM directly
Keep hooks pure Trigger re-renders unnecessarily

---

## 🧑‍💻 Summary

---

Concept Description

---

**Purpose** To reuse stateful logic in functional
components

**Naming** Must start with `use`

**Internals** Can use other React hooks

**Returns** Data, state, or functions

**Use Cases** Fetching data, managing state, event
listeners, timers, etc.

---

---

## 🪄 Final Words

> "Custom hooks are not about reusing state --- they're about reusing
> **stateful logic**."

Use them wisely to keep your React code **modular, readable, and
scalable.**\
Whether you're a beginner learning `useState` or a pro building a design
system --- custom hooks are your best friend.

---

## 📜 License

Licensed under the **MIT License** --- feel free to use, modify, and
share.

---