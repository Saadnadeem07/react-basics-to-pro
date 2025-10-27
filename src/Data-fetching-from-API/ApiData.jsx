import React, { useState, useEffect } from "react";

const ApiData = () => {
  // State to store our fetched API data
  // Starts as an empty array because the API returns a list of items
  const [apiData, setApiData] = useState([]);

  // useEffect runs after the component is rendered
  // The empty [] means it runs ONLY ONCE when the component first loads
  useEffect(() => {
    // Defining an async function to fetch data from an API
    const fetchData = async () => {
      try {
        // Fetching data from a public test API
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        // If response is not OK (e.g., 404 or 500), throw an error
        if (!res.ok) throw new Error("Failed to fetch");

        // Convert response data from JSON text to a JavaScript object/array
        const data = await res.json();

        // Store the fetched data in our state variable
        // This will automatically re-render the component with new data
        setApiData(data);
      } catch (err) {
        // If something goes wrong, log the error in the console
        console.error(err.message);
      }
    };

    // Call the async function
    fetchData();
  }, []); // <- runs only once (when the component mounts)

  // Return the JSX that displays our data
  return (
    <>
      {/* Loop (map) through the apiData array and display each item */}
      {/* key={item.id} helps React identify each element efficiently */}
      {apiData.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};

// Export the component so it can be used in other files
export default ApiData;
