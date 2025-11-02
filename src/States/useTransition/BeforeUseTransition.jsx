import React, { useState } from "react";

/**
 * Demonstration: Before using the useTransition hook
 * ---------------------------------------------------
 * This example shows how a heavy state update (like generating a large list)
 * can block the UI and make typing feel laggy.
 */
const BeforeUseTransition = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  // 🔹 Handle input changes (runs on every keystroke)
  // Generates a huge list synchronously — causes UI blocking.
  function handleTextInputChange(e) {
    const value = e.target.value;
    setInputText(value);

    const newList = [];
    for (let i = 0; i < 35000; i++) {
      newList.push(`${value} => ${i + 1}`);
    }
    setList(newList);
  }

  return (
    <>
      <div className="bg-red-400 p-2">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Before useTransition</h2>
          <p className="text-sm text-white">
            Try typing a few letters quickly — you’ll notice input lag because
            React must process a large state update on every keystroke.
          </p>
        </div>

        <label htmlFor="text" className="font-medium">
          Enter text:
        </label>
        <input
          id="text"
          className="border-2 border-amber-400 rounded px-2 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          type="text"
          value={inputText}
          onChange={handleTextInputChange}
        />

        {/* Heavy render of 35k elements */}
        <div className="flex flex-wrap gap-4 mt-4">
          {list.map((item, index) => (
            <h4 key={index}>{item}</h4>
          ))}
        </div>
      </div>
    </>
  );
};

export default BeforeUseTransition;
