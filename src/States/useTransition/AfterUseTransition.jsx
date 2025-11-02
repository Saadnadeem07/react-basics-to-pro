import React, { useTransition, useState } from "react";

/**
 * Demonstration: After using the useTransition hook
 * --------------------------------------------------
 * This version improves user experience by deferring
 * heavy state updates (like generating a big list)
 * so that typing remains smooth.
 */
const AfterUseTransition = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  // useTransition helps mark non-urgent updates
  const [isPending, startTransition] = useTransition();

  // 🔹 Handle input changes
  // Input text updates immediately (urgent)
  // List generation happens inside startTransition (non-urgent)
  function handleTextInputChange(e) {
    const value = e.target.value;
    setInputText(value);

    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 35000; i++) {
        newList.push(`${value} => ${i + 1}`);
      }
      setList(newList);
    });
  }

  return (
    <>
      <div className="bg-green-400 p-2">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">After useTransition</h2>
          <p className="text-sm text-white">
            Type quickly — React will prioritize input updates first, making
            typing smoother even while generating a large list.
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

        {/* Show a loader while the transition is pending */}
        {isPending && (
          <h1 className="mt-2 text-white font-semibold">Loading Data...</h1>
        )}

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

export default AfterUseTransition;
