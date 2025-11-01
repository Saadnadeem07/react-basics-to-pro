import React, { useEffect } from "react";

const Child = ({ incChild, childCounter }) => {
  useEffect(() => {
    console.log("child is rendering");
  }, [incChild, childCounter]);

  return (
    <>
      <h2>Child value = {childCounter}</h2>
      <button onClick={incChild}>Inc Child</button>
    </>
  );
};

export default Child;
