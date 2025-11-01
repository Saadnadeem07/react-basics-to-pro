import React, { useCallback, useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [parentCounter, setParentCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);

  // const incParent2 = useCallback(() => {
  //   setParentCounter((prev) => prev + 1);
  // }, []);
  const incParent2 = () => {
    setParentCounter((prev) => prev + 1);
  };

  const incChild = useCallback(() => {
    setChildCounter((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>Parent value = {parentCounter}</h2>
      <button onClick={incParent2}>Inc Parent</button>
      <Child incChild={incChild} childCounter={childCounter} />
    </>
  );
};
export default Parent;
