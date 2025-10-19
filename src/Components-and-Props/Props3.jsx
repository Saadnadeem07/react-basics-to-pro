// 📘 Props3.jsx
// Demonstrates Conditional Rendering using Logical AND (&&).
// In React, the expression `condition && JSX` only renders the JSX when the condition is true.

import React from "react";

const Props3 = ({ brand, model, price, available, specs }) => {
  return (
    <>
      {/* ⚙️ If "available" is true → this block runs; otherwise, nothing is displayed */}
      {available && (
        <div>
          Brand: {brand} - Model: {model} is available in PKR: {price}
          <br />
          {/* 🔍 Example: Accessing nested object props */}
          Specs → RAM: {specs.ram}, ROM: {specs.rom}, Processor:{" "}
          {specs.processor}
        </div>
      )}
    </>
  );
};

export default Props3;
