import React from "react";
import { useReducer } from "react";

const ManagingObjWithReducerHook = () => {
  const initialState = {
    firstName: "Saad",
    lastName: "Nadeem",
    age: 23,
    uni: "FAST NUCES",
  };
  function reducerFunction(state, action) {
    switch (action.type) {
      case "incrementAge":
        return { ...state, age: state.age + 1 };
      case "updateField":
        return { ...state, [action.field]: action.value };
    }
  }
  const onSubmitHandler = (e) => {
    e.preventDefault(); // Prevents full page reload on submit
    console.log(name, email, password); // Prints user input in console
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      <div>
        <form action="" onSubmit={onSubmitHandler}>
          <label className="px-2" htmlFor="inputAge">
            Input Age
          </label>
          <input
            className="border-2 border-amber-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="number"
            onChange={(e) =>
              dispatch({
                type: "updateField",
                field: "age",
                value: e.target.value,
              })
            }
          />
        </form>

        <h3>Current State:</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </>
  );
};

export default ManagingObjWithReducerHook;
