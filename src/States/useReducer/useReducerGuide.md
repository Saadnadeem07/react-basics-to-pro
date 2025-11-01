# useReducer Hook in React

This project demonstrates the use of the `useReducer` hook in React for managing complex state in a cleaner and more organized way.

## What is useReducer?

`useReducer` is a React hook that is an alternative to `useState`. It is used when you have complex state logic that involves multiple sub-values or when the next state depends on the previous state.

### Key Concepts

- **State:** The current state of your component.
- **Action:** An object describing what you want to do.
- **Reducer:** A function that takes the current state and an action and returns a new state.
- **Dispatch:** A function to send actions to the reducer.

## Syntax

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `reducer` is the function that defines how state changes based on actions.
- `initialState` is the initial value of the state.
- `state` is the current state.
- `dispatch` is a function to trigger state changes.

## Example: Counter Component

```javascript
import React, { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
```

## Advantages of useReducer

- Organizes complex state logic in one place.
- Makes it easier to read and maintain.
- Useful when multiple state variables depend on each other.
- Ideal for managing form inputs, counters, toggles, or multi-step UI.

## Conclusion

`useReducer` is a powerful tool for React developers to handle complex state updates in a predictable and organized manner. It helps you avoid messy `useState` logic when your component grows.

---

**Happy Coding!**
