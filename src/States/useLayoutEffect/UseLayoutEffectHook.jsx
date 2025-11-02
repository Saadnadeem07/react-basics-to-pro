import React from "react";
import WithUseLayoutEffect from "./WithUseLayoutEffect";
import WithoutUseLayoutEffect from "./WithoutUseLayoutEffect";

const UseLayoutEffectHook = () => {
  return (
    <>
      <div className="bg-red-200 text-black">
        <WithoutUseLayoutEffect />
      </div>
      <div className="bg-green-200 text-black">
        <WithUseLayoutEffect />
      </div>
    </>
  );
};

export default UseLayoutEffectHook;
