// ---------------------------------------
// FORM HANDLING - PRO LEVEL - USING STATE FOR EACH INPUT
// ---------------------------------------

import React, { useState } from "react"; // Import React and useState Hook

const FormHandling2 = () => {
  // Initialize state to hold form data (name, email, password)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  // -------------------------------------------------
  // CHANGE HANDLER FUNCTION — UPDATES STATE DYNAMICALLY
  // -------------------------------------------------
  const changeHandler = (e) => {
    // Destructure "name" and "value" from the event target (the input field)
    // e.target.name  -> gives us which input is being changed (e.g., "email")
    // e.target.value -> gives us the new value typed by the user
    const { name, value } = e.target;

    // Now, we update the state using the setter function "setFormData"

    // Explanation of what's happening here:
    // 1️⃣  { ...formData } -> Copies all existing key-value pairs from current state.
    //     Example: if formData = { name: "Ali", email: "", password: "" }
    //     ...formData makes a clone of that object.
    //
    // 2️⃣  [name]: value -> Uses computed property syntax.
    //     It means: replace the key that matches the input's name (e.g., "email")
    //     with its new value (e.g., "ali@gmail.com").
    //
    // 3️⃣  Combined together:
    //     setFormData({ ...formData, [name]: value })
    //     → Creates a new object by copying old data and updating only the changed field.
    //
    // ✅ This ensures that typing in one field doesn't erase other field values.
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <form action="" onSubmit={onSubmitHandler}>
        {/* Controlled Input for Name */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={changeHandler} // Every keystroke triggers state update
        />

        <br />

        {/* Controlled Input for Email */}
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
        />

        <br />

        {/* Controlled Input for Password */}
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={changeHandler}
        />

        <br />

        {/* Submit Button */}
        <input type="submit" />
      </form>
    </>
  );
};

export default FormHandling2;
