// hese events are from js not from jsx
import React from "react";
let count = 0;
function customAlert() {
  return alert("How's your React going?");
}
function increment() {
  console.log("count before + =", count);
  count++;
  console.log("count after + =", count);
}
function decrement() {
  console.log("count before - =", count);
  count--;
  console.log("count after - =", count);
}
const ClickEvent = () => {
  return (
    <>
      <button onClick={customAlert}>Click Me!</button>
      {/* This file is to make you familiar with the Events we will move towards useState then we will experience many things. */}
      <h2>count = {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h3>If you are clicking the + - buttons check console</h3>
    </>
  );
};

export default ClickEvent;
