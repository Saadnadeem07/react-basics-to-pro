import React from "react";
import { useCustomHook } from "./useCustomHook";

/**
 * Component: UsingCustomHook
 * --------------------------
 * Demonstrates how to use a custom React hook for data fetching.
 * Fetches TODO items from an API using `useCustomHook` and renders them.
 */
const UsingCustomHook = () => {
  // Destructure the returned values from the custom hook
  const { data, isError, isLoading } = useCustomHook(
    "https://jsonplaceholder.typicode.com/todos"
  );

  // Conditional logging (example purpose)
  if (!isLoading && !data) {
    console.log("No data found or fetch failed");
  }

  // Render UI
  return (
    <>
      {/* Display a loading message while data is being fetched */}
      {isLoading && <p>Loading data...</p>}

      {/* Display error message if fetching fails */}
      {isError && <p style={{ color: "red" }}>Error fetching data.</p>}

      {/* Render the fetched data as a list */}
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            {item.id} - {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsingCustomHook;
