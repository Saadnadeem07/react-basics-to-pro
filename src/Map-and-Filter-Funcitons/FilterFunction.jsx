// 📘 FilterFunction.jsx
// -------------------------------------------------------------
// 🧠 Concept: The `filter()` function in JavaScript + React
// -------------------------------------------------------------
// The filter() method is a JavaScript function used to create
// a *new array* that only includes elements matching a condition.
//
// In React, we often use `filter()` along with `map()` to show
// only certain items from an array — like available products,
// completed tasks, active users, etc.
// -------------------------------------------------------------

import React from "react";

const FilterFunction = () => {
  // 📦 Step 1: Define an array of phone objects
  const phones = [
    {
      id: 1,
      brand: "Apple",
      model: "iPhone 16 Pro Max",
      price: 1200,
      available: true,
    },
    {
      id: 2,
      brand: "Apple",
      model: "iPhone 16 Pro",
      price: 1100,
      available: false,
    },
    { id: 3, brand: "Apple", model: "iPhone 16", price: 1000, available: true },
    {
      id: 4,
      brand: "Apple",
      model: "iPhone 17 Pro Max",
      price: 1200,
      available: true,
    },
    {
      id: 5,
      brand: "Apple",
      model: "iPhone 17 Pro",
      price: 1100,
      available: true,
    },
    {
      id: 6,
      brand: "Apple",
      model: "iPhone 17 Air",
      price: 1000,
      available: false,
    },
  ];

  // ⚙️ Step 2: Use filter() to return only the phones that are available (available: true)
  // Then chain map() to display those filtered phones on the screen.

  return (
    <>
      <h1>📱 Filter Function Example</h1>

      <p>
        Note: The <code>filter()</code> method returns a new array containing
        only items that match the given condition. Here, we are filtering phones
        where <code>available === true</code>.
      </p>

      {/* 🔍 Step 3: Filter and then render */}
      {phones
        .filter((phone) => phone.available) // Only include available phones
        .map((filteredPhone) => (
          <div key={filteredPhone.id}>
            <ul>
              <li>Brand: {filteredPhone.brand}</li>
              <li>Model: {filteredPhone.model}</li>
              <li>Price: ${filteredPhone.price}</li>
            </ul>
          </div>
        ))}

      {/* ✅ Step 4: React automatically displays the filtered list */}
    </>
  );
};

export default FilterFunction;
