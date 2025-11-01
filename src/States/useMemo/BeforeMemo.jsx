import React, { useState } from "react";

const BeforeMemo = () => {
  // Two state variables: one for counter, one for number
  const [counter, setcounter] = useState(0);
  const [number, setnumber] = useState(0);

  // A simple function that simulates a "complex" calculation
  // For demo, it just doubles the number and logs "Calculating" every time it's called
  const complexCalculation = () => {
    console.log("Calculating");
    return number * 2;
  };

  // Every time the component re-renders (even for counter), this runs again
  const result = complexCalculation();

  return (
    <>
      <h2>Counter: {counter}</h2>
      <h3>Number: {result}</h3>

      {/* Button to increase number */}
      <button onClick={() => setnumber((prev) => prev + 1)}>
        increase number
      </button>

      {/* Button to increase counter */}
      <button onClick={() => setcounter((prev) => prev + 1)}>
        increase counter
      </button>

      <p>
        Open the console and notice that "Calculating" is logged even when
        increasing the counter — meaning unnecessary recalculations.
      </p>
    </>
  );
};

export default BeforeMemo;
