// 📘 BasicComponents.jsx
// This file introduces the concept of **React Components**.
// A component is a reusable piece of UI — like a function that returns HTML.
// Components can contain HTML, CSS, and JavaScript logic.

// 💡 Tip: In VS Code, typing "rafce" (with ES7+ React extension) creates this component structure automatically.

import React from "react";

// ✅ Functional Component (using Arrow Function)
const BasicComponents = () => {
  // 🧠 Normal JavaScript can be written here before the return statement.
  const arr = [1, 2, 3, 4, 5];
  const name = "Saad Nadeem";

  return (
    // 🔁 A component must return **one root element**.
    // If you want to return multiple elements, wrap them in a Fragment: <> ... </>
    <>
      <div>This is a basic React component ✅</div>
      <div>The sum of 5 + 6 = {5 + 6}</div>
      <div>My name is {name}</div>

      {/* 🧩 Rendering an array using the map() function */}
      <div>
        Numbers in array:
        {arr.map((num) => (
          // ⚠️ React requires a unique "key" when rendering lists
          <span key={num}> {num} </span>
        ))}
      </div>
    </>
  );
};

export default BasicComponents;
