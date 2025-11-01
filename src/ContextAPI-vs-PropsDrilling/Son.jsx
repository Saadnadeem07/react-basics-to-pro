import React from "react";
import { useContext } from "react";
import MyContext from "./Context/MyContext";
const Son = () => {
  const { value, city, counter, setCounter } = useContext(MyContext);
  console.log("counter", counter);
  console.log("typeof counter", typeof counter);
  return (
    <>
      <div className="bg-[#1a1a1a] mt-2 p-4">
        <h2>I'm Son and i was called in the Father component</h2>
        <p>
          The values i can access as props from the context api are as follow
        </p>
        <h2>Value: {value}</h2>
        <h2>City: {city}</h2>
        <h2>Counter: {counter}</h2>

        <div className="mt-4 flex gap-4">
          <button onClick={() => setCounter((prev) => prev + 1)}>
            Increase Counter
          </button>
          <button onClick={() => setCounter((prev) => prev - 1)}>
            Decrease Counter
          </button>
        </div>
      </div>
    </>
  );
};

export default Son;
