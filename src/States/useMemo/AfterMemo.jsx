import React, { useState, useMemo } from "react";

const AfterMemo = () => {
  // Same two states as before
  const [counter, setcounter] = useState(0);
  const [number, setnumber] = useState(0);

  // useMemo caches the result of this calculation
  // It only recalculates when `number` changes (not on every re-render)
  const complexCalculation = useMemo(() => {
    console.log("Calculating");
    return number * 2;
  }, [number]);

  const result = complexCalculation;

  return (
    <>
      <h2>Counter: {counter}</h2>
      <h3>Number: {result}</h3>

      {/* Increasing number triggers recalculation */}
      <button onClick={() => setnumber((prev) => prev + 1)}>
        increase number
      </button>

      {/* Increasing counter does NOT trigger recalculation now */}
      <button onClick={() => setcounter((prev) => prev + 1)}>
        increase counter
      </button>

      <p>
        Open the console again — now "Calculating" only appears when you change
        the number, not when you change the counter. This improves performance.
      </p>
    </>
  );
};

export default AfterMemo;
