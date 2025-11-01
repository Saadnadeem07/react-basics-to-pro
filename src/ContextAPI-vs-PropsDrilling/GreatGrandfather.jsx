import React from "react";
import Grandfather from "./Grandfather";
import ContextStates from "./Context/ContextStates";
const GreatGrandfather = () => {
  return (
    <>
      <ContextStates>
        <h2>I'm GreatGrandfather</h2>
        <Grandfather />
      </ContextStates>
    </>
  );
};

export default GreatGrandfather;
