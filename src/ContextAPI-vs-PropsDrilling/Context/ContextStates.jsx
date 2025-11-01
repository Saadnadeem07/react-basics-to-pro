import React, { useState } from "react";
import MyContext from "./MyContext";
const ContextStates = (props) => {
  // create whatever data you want to create here
  const [counter, setCounter] = useState(0);
  const value = 1000;
  const city = "Lahore";
  return (
    <>
      <MyContext.Provider
        value={{
          value,
          city,
          counter,
          setCounter,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
};

export default ContextStates;
