// Import React and the useState hook from the React library
import React, { useState } from "react";

// Functional component for handling a simple form
const FormHandling = () => {
  // -------------------------------
  // Step 1: Defining state variables
  // -------------------------------
  // These three state variables hold the values entered by the user.
  // Each corresponds to one input field (name, email, password).
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---------------------------------------
  // Step 2: Form submission event handler
  // ---------------------------------------
  // This function is triggered when the user submits the form.
  // It prevents the page from reloading (default browser behavior)
  // and logs the form data to the console.
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevents full page reload on submit
    console.log(name, email, password); // Prints user input in console
  };

  // -------------------------------
  // Step 3: JSX structure of the form
  // -------------------------------
  // The form uses controlled components — meaning each input field’s
  // value is controlled by React state, and updated via onChange.
  return (
    <>
      {/* The form element, with its submit event bound to onSubmitHandler */}
      <form action="" onSubmit={onSubmitHandler}>
        {/* Name input field */}
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name} // Controlled value (linked to state)
          onChange={(e) => setName(e.target.value)} // Update state on change
        />
        <br />

        {/* Email input field */}
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
        <br />

        {/* Password input field */}
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state on change
        />
        <br />

        {/* Submit button that triggers onSubmitHandler */}
        <input type="submit" name="submit" id="submit" value="Submit" />
        <br />
      </form>
    </>
  );
};

// Exporting the component so it can be imported in other files
export default FormHandling;
