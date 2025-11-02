import React, { useId } from "react";

const UseIdHook = () => {
  // Generate a unique base id for this component
  const id = useId();

  // Some sample list data (without unique IDs)
  const users = ["Mohid", "Saad", "Ahmed", "Anas"];

  return (
    <div className="p-4 bg-blue-200 rounded-md text-black">
      <h2 className="text-lg font-semibold mb-2">Example: useId Hook</h2>
      <p className="mb-4 text-sm">
        The <code>useId</code> hook generates a unique and stable ID that React
        guarantees will never clash — even if the component re-renders or runs
        on the server.
      </p>

      <form className="mb-4">
        {/* We can use useId to connect label and input for accessibility */}
        <label htmlFor={`${id}-name`} className="block mb-1 font-medium">
          Enter Name:
        </label>
        <input
          id={`${id}-name`}
          type="text"
          placeholder="Your name"
          className="border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </form>

      <h3 className="font-medium mb-2">Rendered List:</h3>
      <ul className="list-disc ml-6">
        {users.map((user, index) => (
          // If no unique key exists in your data, use useId + index
          <li key={`${id}-${index}`}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseIdHook;
