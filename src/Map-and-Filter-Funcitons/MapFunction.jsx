// 📘 MapFunction.jsx
// -------------------------------------------------------------
// 🧠 Concept: The `map()` function
// -------------------------------------------------------------
// The map() function actually comes from JavaScript — not React.
// It’s commonly used in React to dynamically render lists or arrays.
// In this example, we’ll use `map()` to display a list of phones.
// -------------------------------------------------------------

import React from "react";

const MapFunction = () => {
  // 📦 Step 1: Create an array of phone objects
  // Each object contains details like id, brand, model, and price.
  const phones = [
    {
      id: 1,
      brand: "Apple",
      model: "iPhone 17 Pro Max",
      price: 1200,
    },
    {
      id: 2,
      brand: "Apple",
      model: "iPhone 17 Pro",
      price: 1100,
    },
    {
      id: 3,
      brand: "Apple",
      model: "iPhone 17 Air",
      price: 1000,
    },
  ];

  // ⚙️ Step 2: Use .map() to loop through each phone object
  // and return some JSX to display it on the page.
  // Note: Always add a unique `key` when rendering lists in React.
  // React uses these keys to efficiently update or re-render elements.

  return (
    <>
      <h1>📱 Map Function Example</h1>

      <p>
        Note: The <code>map()</code> function must include a <b>unique key</b>{" "}
        (usually an ID). This helps React identify which elements have changed,
        are added, or are removed. Without a key, React will show a warning and
        your code may fail to deploy.
      </p>

      {/* 🔁 Loop through each phone and display its details */}
      {phones.map((phone) => (
        <div key={phone.id}>
          {/* this is the unqiue key */}
          <ul>
            <li>Brand: {phone.brand}</li>
            <li>Model: {phone.model}</li>
            <li>Price: ${phone.price}</li>
          </ul>
        </div>
      ))}

      {/* ✅ Step 3: React will automatically render all phones inside the return */}
    </>
  );
};

export default MapFunction;
