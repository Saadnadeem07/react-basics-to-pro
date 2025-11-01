import React from "react";
import BeforeMemo from "./BeforeMemo";
import AfterMemo from "./AfterMemo";

const UseMemoHook = () => {
  return (
    <>
      <p>Before Memo</p>
      <BeforeMemo />
      <p>After Memo</p>
      <AfterMemo />
    </>
  );
};

export default UseMemoHook;
