import React from "react";
import Son from "./Son";
const Father = () => {
  return (
    <>
      <h2>I'm Father and i was called in the Grandfather component</h2>
      <Son />
    </>
  );
};

export default Father;
