// 📘 ComponentsAndProps.jsx
// This component groups all our examples about Components and Props.
// Each section below demonstrates a separate React concept in action.

import React from "react";
import BasicComponents from "./BasicComponents";
import Props from "./Props";
import Props2 from "./Props2";
import Props3 from "./Props3";
const specs = {
  ram: "6GB",
  rom: "128GB",
  processor: "A19 Bionic",
};
const ComponentsAndProps = () => {
  // 🧠 Example object we'll pass as props later

  return (
    <>
      {/* 🧩 Example 1: Basic React Component */}
      <h2>BasicComponents</h2>
      <BasicComponents />

      {/* 🧩 Example 2: Passing Props (Data from Parent → Child) */}
      <h2>Basic Props</h2>
      <Props name="Saad Nadeem" age={23} university="FAST NUCES" />

      {/* 🧩 Example 3: Conditional Rendering using Ternary Operator */}
      <h2>
        Displaying things using Ternary Operator - Conditional Rendering #01
      </h2>
      <Props2
        brand="Apple"
        model="iPhone 14 Pro"
        price={250000}
        available={true}
      />
      <Props2
        brand="Apple"
        model="iPhone 15 Pro"
        price={300000}
        available={false}
      />

      {/* 🧩 Example 4: Conditional Rendering using Logical AND (&&) */}
      <h2>Displaying things using && - Conditional Rendering #02</h2>
      <Props3
        brand="Apple"
        model="iPhone 16 Pro Max"
        price={400000}
        available={true}
        specs={specs}
      />
      <Props3
        brand="Apple"
        model="iPhone 17 Pro Max"
        price={400000}
        available={false}
        specs={specs}
      />
    </>
  );
};

export default ComponentsAndProps;
