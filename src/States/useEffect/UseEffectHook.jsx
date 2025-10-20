import React, { useEffect, useState } from "react";

// A simple component to demonstrate how useState and useEffect work together
const UseEffectHook = () => {
  // Step 1: Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Function to increment count
  function increment() {
    // React schedules state updates — they are not immediate
    // That’s why the console log below will show the *previous* value
    setCount((count) => count + 1);
    console.log(
      "Count value right after increment call (not updated yet): ",
      count
    );
  }

  // Function to decrement count
  function decrement() {
    setCount((count) => count - 1);
    console.log(
      "Count value right after decrement call (not updated yet): ",
      count
    );
  }

  // Step 2: useEffect runs *after* the component re-renders
  // This means the updated 'count' value will be reflected here
  useEffect(() => {
    console.log("useEffect triggered → Updated count value: ", count);
  }, [count]); // dependency array: runs whenever 'count' changes

  return (
    <>
      <h1>Count = {count}</h1>
      <h3>Check the console for details about how state updates work</h3>

      <div>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default UseEffectHook;
