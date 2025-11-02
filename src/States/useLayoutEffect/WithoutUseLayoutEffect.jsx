import React, { useEffect, useState } from "react";

const WithoutUseLayoutEffect = () => {
  const [boxPosition, setBoxPosition] = useState(0);

  useEffect(() => {
    // This runs AFTER the browser paints the screen.
    // So first you see the box at left, then it jumps to the right.
    setBoxPosition(300);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Without useLayoutEffect</h2>
      <p className="text-sm mb-4">
        When this component loads, the red box first appears on the left, then
        jumps to the right (flicker).
      </p>

      <div
        style={{
          width: "100px",
          height: "100px",
          background: "tomato",
          transform: `translateX(${boxPosition}px)`,
          transition: "transform 0.2s ease",
        }}
      />
    </div>
  );
};

export default WithoutUseLayoutEffect;
