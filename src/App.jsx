// 📘 App.jsx
// This is the main (root) component of our React app.
// It acts as the *entry point* that imports and renders other components on the screen.

import React from "react";
import Introduction from "../Introduction";
import ComponentsAndProps from "./Components-and-Props/ComponentsAndProps";
import ClickEvent from "./States/useState/ClickEvent";
import UseStateHook from "./States/useState/UseStateHook";
import MapAndFilter from "./Map-and-Filter-Funcitons/MapAndFilter";
import UseEffectHook from "./States/useEffect/UseEffectHook";
import ApiData from "./Data-fetching-from-API/apiData";
import FormHandling from "./Form-Handling/FormHandling";
import FormHandling2 from "./Form-Handling/FormHandling2";
const App = () => {
  return (
    <>
      {/* 👇 You can comment/uncomment these lines to test different topics step by step */}
      {/* <Introduction />
      <ComponentsAndProps /> */}
      {/* ClickEvent */}
      {/* <UseStateHook /> */}
      {/* <MapAndFilter /> */}
      {/* <UseEffectHook /> */}
      {/* <ApiData /> */}
      {/* <FormHandling /> */}
      <FormHandling2 />
    </>
  );
};

export default App;
