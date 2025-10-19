// 📘 Props2.jsx
// Demonstrates *Destructuring Props* and *Conditional Rendering* using the Ternary Operator.

import React from "react";

const Props2 = ({ brand, model, price, available }) => {
  // 🧩 Destructuring: directly extract values from the props object
  // available → boolean (true/false) → determines what to render

  return (
    <>
      {/* Conditional Rendering using Ternary Operator */}
      {available ? (
        <div>
          Brand: {brand} - Model: {model} is available in PKR: {price}
        </div>
      ) : (
        <div>
          {brand} {model} is out of stock ❌
        </div>
      )}
    </>
  );
};

export default Props2;
