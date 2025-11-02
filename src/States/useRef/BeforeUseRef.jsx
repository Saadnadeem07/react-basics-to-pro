import React from "react";
import { useState, useEffect } from "react";
const BeforeUseRef = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    setPrevCount(count); // causes re-render every time count changes
  }, [count]);

  return (
    <div>
      <p>Now: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default BeforeUseRef;
