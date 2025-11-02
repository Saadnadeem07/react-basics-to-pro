import React from "react";
import BeforeUseTransition from "./BeforeUseTransition";
import AfterUseTransition from "./AfterUseTransition";

const UseTransitionHook = () => {
  return (
    <>
      <BeforeUseTransition />
      <AfterUseTransition />
    </>
  );
};

export default UseTransitionHook;
