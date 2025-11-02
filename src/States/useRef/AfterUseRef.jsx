import React from "react";
import { useState, useRef, useEffect } from "react";
const AfterUseRef = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0); // Step 1: store old value here

  useEffect(() => {
    prevCount.current = count; // Step 2: update after render
  }, [count]);

  return (
    <div>
      <p>Now: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default AfterUseRef;
