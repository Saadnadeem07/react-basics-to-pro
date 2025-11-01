import React, { useReducer } from "react";

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

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>Counter: {state.count}</h1>
      <div className="flex gap-4 mt-4">
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <p>
        We are managing the state but using the useReducer Function not by the
        use state. This might not be the good use case to use useReducer. But
        useReducer is used when we have too amny useStates and it feels messy
      </p>
    </>
  );
};

export default UseReducerHook;
