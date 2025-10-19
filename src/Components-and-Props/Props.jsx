// 📘 Props.jsx
// Props (short for "Properties") allow you to pass data from a *parent* component to a *child* component.
// Think of it like function parameters — they make components reusable and dynamic.

import React from "react";

const Props = (props) => {
  // 🧠 Here, we are receiving 'props' as a single object.
  // Example: props.name, props.age, props.university

  return (
    <>
      My name is {props.name}, I am {props.age} years old, and I graduated from{" "}
      {props.university}.
    </>
  );
};

export default Props;
