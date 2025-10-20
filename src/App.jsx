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
const App = () => {
  return (
    <>
      {/* 👇 You can comment/uncomment these lines to test different topics step by step */}
      {/* <Introduction />
      <ComponentsAndProps /> */}
      {/* ClickEvent */}
      {/* <UseStateHook /> */}
      {/* <MapAndFilter /> */}
      <UseEffectHook />
    </>
  );
};

export default App;
