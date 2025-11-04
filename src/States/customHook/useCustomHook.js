import React, { useState, useEffect } from "react";

/**
 * Custom Hook: useCustomHook
 * --------------------------
 * Fetches data from a given API endpoint.
 * Handles loading state, error state, and data storage.
 *
 * ✅ Hook Naming Rule:
 *    Custom hooks must start with "use" (as per React convention)
 */
export const useCustomHook = (url) => {
  // State to store fetched data
  const [data, setData] = useState(null);

  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // State to track if any error occurs
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    /**
     * Fetch data from the provided URL
     * Uses async/await pattern for readability and error handling
     */
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        // Check if response is OK (status 200–299)
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();

        // Validate the result
        if (!result) throw new Error("No data found");

        // Set data and clear any previous errors
        setData(result);
        setIsError(false);
      } catch (error) {
        // Handle and log errors gracefully
        console.error("Error:", error.message);
        setIsError(true);
      } finally {
        // End loading state regardless of success or failure
        setIsLoading(false);
      }
    };

    // Invoke the fetch function
    fetchData();

    // Re-run the effect whenever the URL changes
  }, [url]);

  // Return all relevant states to be used by components
  return { data, isError, isLoading };
};
