import React from "react";
import Father from "./Father";
const Grandfather = () => {
  return (
    <>
      <h2>
        I'm Grandfather and i was called in the GreatGrandfather component
      </h2>
      <Father />
    </>
  );
};

export default Grandfather;
