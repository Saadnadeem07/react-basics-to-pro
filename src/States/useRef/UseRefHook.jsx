import React from "react";
import BeforeUseRef from "./BeforeUseRef";
import AfterUseRef from "./AfterUseRef";

const UseRefHook = () => {
  return (
    <>
      <BeforeUseRef />
      After use ref
      <AfterUseRef />
    </>
  );
};

export default UseRefHook;
