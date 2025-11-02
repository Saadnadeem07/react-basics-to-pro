// 📘 App.jsx
// This is the main (root) component of our React app.
// It acts as the *entry point* that imports and renders other components on the screen.

import React from "react";
import Introduction from "../Introduction";
import Parent from "./States/useCallback/Parent";
import UseRefHook from "./States/useRef/UseRefHook";
import ClickEvent from "./States/useState/ClickEvent";
import UseMemoHook from "./States/useMemo/useMemoHook";
import ApiData from "./Data-fetching-from-API/apiData";
import FormHandling from "./Form-Handling/FormHandling";
import FormHandling2 from "./Form-Handling/FormHandling2";
import UseStateHook from "./States/useState/UseStateHook";
import UseEffectHook from "./States/useEffect/UseEffectHook";
import UseReducerHook from "./States/useReducer/UseReducerHook";
import MapAndFilter from "./Map-and-Filter-Funcitons/MapAndFilter";
import UseTransitionHook from "./States/useTransition/useTransitionHook";
import ComponentsAndProps from "./Components-and-Props/ComponentsAndProps";
import GreatGrandfather from "./ContextAPI-vs-PropsDrilling/GreatGrandfather";
import ManagingObjWithReducerHook from "./States/useReducer/ManagingObjWithReducerook";
const App = () => {
  return (
    <>
      <div className="bg-[#10172a] p-70 ">
        {/* 👇 You can comment/uncomment these lines to test different topics step by step */}
        {/* <Introduction />
        <ComponentsAndProps /> */}
        {/* ClickEvent */}
        {/* <UseStateHook /> */}
        {/* <MapAndFilter /> */}
        {/* <UseEffectHook /> */}
        {/* <ApiData /> */}
        {/* <FormHandling /> */}
        {/* <FormHandling2 /> */}
        {/* <GreatGrandfather /> */}
        {/* <UseReducerHook /> */}
        {/* <ManagingObjWithReducerHook /> */}
        {/* <Parent /> */}
        {/* <UseMemoHook /> */}
        {/* <UseRefHook/> */}
        <UseTransitionHook />
      </div>
    </>
  );
};

export default App;
