# ⚛️ ES7+ React/Redux/React-Native/JS Snippets — Complete Beginner to Pro Guide

> 📦 **Extension:** ES7+ React/Redux/React-Native/JS Snippets  
> 👉 Install from VS Code Marketplace (by `dsznajder`)

---

## 🧱 **1. Component Creation Snippets**

| Snippet | Expands To | Description |
| --- | --- | --- |
| **`rafce`** | → React Arrow Function Component + Export | Modern React component with default export (most used) |
| **`rafc`** | → React Arrow Function Component (no export) | Same as `rafce`, but doesn’t export by default |
| **`rfc`** | → React Function Component (with function keyword) | Traditional function component with export |
| **`rfce`** | → React Function Component + Export | Function keyword version (older style, still fine) |
| **`rcc`** | → React Class Component | Class-based component (rarely used now) |
| **`rce`** | → React Class Component + Export | Class-based + export (older React) |
| **`rconst`** | → Constructor snippet inside a class | Used in class components |
| **`rscp`** | → React Component with PropTypes | Adds PropTypes template |
| **`rpt`** | → PropTypes import statement | Quick import for PropTypes |

---

### 🔹 Example: `rafce`

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>MyComponent</div>
  );
};

export default MyComponent;
```

✅ **Best for:** Modern React apps using arrow functions + default export.  
*(This is the industry standard now.)*

---

## 🧩 **2. Hooks Snippets**

| Snippet | Expands To | Description |
| --- | --- | --- |
| **`useState`** | → useState Hook | Creates a state variable and setter |
| **`useEffect`** | → useEffect Hook | Adds side effects (like fetching data) |
| **`useRef`** | → useRef Hook | Creates a reference to a DOM element or value |
| **`usf`** | → useState Function snippet | Full useState pattern |
| **`uef`** | → useEffect Function snippet | Full useEffect pattern |

### 🔹 Example: `usf`

```jsx
const [count, setCount] = useState(0);
```

### 🔹 Example: `uef`

```jsx
useEffect(() => {
  console.log('Component mounted');
}, []);
```

---

## 🧠 **3. React Redux Snippets**

| Snippet | Expands To | Description |
| --- | --- | --- |
| **`rxaction`** | → Redux Action | Creates a basic action template |
| **`rxreducer`** | → Redux Reducer | Basic reducer template |
| **`rxconst`** | → Redux Constant | Exports an action constant |
| **`rxslice`** | → Redux Toolkit Slice | Creates a slice using `createSlice` |

### 🔹 Example: `rxslice`

```jsx
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 🧰 **4. Console, Return & Arrow Function Helpers**

| Snippet | Expands To | Description |
| --- | --- | --- |
| **`clg`** | `console.log()` | Quick console log |
| **`clo`** | `console.log(object)` | Logs object with label |
| **`fn`** | Function Declaration | Standard function syntax |
| **`afn`** | Arrow Function | Arrow function template |
| **`anfn`** | Anonymous Function | `() => {}` short form |
| **`fre`** | ForEach Loop | Iterates over arrays |
| **`imp`** | Import Statement | Quickly import something |
| **`imd`** | Import Default | Import default export |
| **`exd`** | Export Default | `export default ...` |
| **`ex`** | Export Named | `export {...}` |

### 🔹 Example: `clg`

```jsx
console.log('Hello world');
```

### 🔹 Example: `afn`

```jsx
const add = (a, b) => {
  return a + b;
};
```

---

## 🎨 **5. React Router Snippets**

| Snippet | Expands To | Description |
| --- | --- | --- |
| **`imrr`** | Import React Router DOM | `import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';` |
| **`rroute`** | Route Component | Basic Route snippet |
| **`rrd`** | Redirect Component | Redirect snippet |

### 🔹 Example: `imrr`

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
```

---

## 🪄 **6. PropTypes & Default Props**

| Snippet | Expands To | Description |
| --- | --- | --- |
| **`rpt`** | Import PropTypes | Quick import |
| **`rptp`** | PropTypes inside component | Adds PropTypes boilerplate |
| **`rdp`** | Default Props | Adds default props structure |

### 🔹 Example:

```jsx
import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return <button>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: 'Click Me',
};

export default Button;
```

---

## 🧱 **7. Miscellaneous & Utility Snippets**

| Snippet | Expands To | Description |
| --- | --- | --- |
| **`exp`** | Export Statement | Named export template |
| **`imr`** | Import React | `import React from 'react'` |
| **`imd`** | Import Default | Import default component |
| **`imrc`** | Import React + Component | `import React, { Component } from 'react'` |
| **`imrd`** | Import ReactDOM | `import ReactDOM from 'react-dom'` |
| **`hoc`** | Higher Order Component | HOC boilerplate |

---

## ⚡ **8. Most Commonly Used in Real Projects**

If you want a *shortlist of “everyday” React snippets* to memorize 👇

| Type | Snippet | Purpose |
| --- | --- | --- |
| Component | `rafce` | Create React arrow function component with export |
| Hook | `usf` | Create useState |
| Hook | `uef` | Create useEffect |
| Import | `imp` | Import statement |
| Export | `exd` | Export default |
| Debugging | `clg` | Console log |
| Utility | `afn` | Arrow function |

These 7 cover **90% of real-world usage** in modern React apps.

---

## 🧭 **In Simple Words**

> Use `rafce` to create components instantly  
> Use `usf` and `uef` for state & effects  
> Use `clg` for debugging  
> Use `imp` & `exd` to import/export faster

---

## 💡 **Pro Tip**

If you’re using Tailwind or other libraries, you can create **your own custom snippets** in VS Code:

1. Go to `File → Preferences → Configure User Snippets`
2. Choose `javascriptreact.json`
3. Add your personalized snippet templates

Example:

```json
"React Component with Tailwind": {
  "prefix": "rtw",
  "body": [
    "const ${1:ComponentName} = () => {",
    "  return (",
    "    <div className=\"${2:container}\">",
    "      ${3:Content}",
    "    </div>",
    "  );",
    "};",
    "",
    "export default $1;"
  ],
  "description": "React component with Tailwind CSS base structure"
}
```

---

## 🧾 **Final Summary Table**

| Category | Snippet | Purpose |
| --- | --- | --- |
| Component | `rafce`, `rfce`, `rfc`, `rcc` | Create React component templates |
| Hooks | `usf`, `uef`, `useState`, `useEffect` | React Hooks setup |
| Redux | `rxslice`, `rxaction`, `rxreducer` | Redux boilerplate |
| Utility | `clg`, `imp`, `exd`, `afn` | Common JavaScript helpers |
| Routing | `imrr`, `rroute` | React Router imports |
| Props | `rpt`, `rptp`, `rdp` | PropTypes + default props |
| Misc | `hoc`, `rscp`, `rconst` | Misc patterns & helpers |
