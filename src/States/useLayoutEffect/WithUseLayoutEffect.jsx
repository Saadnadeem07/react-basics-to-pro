import React, { useLayoutEffect, useState } from "react";

const WithUseLayoutEffect = () => {
  const [boxPosition, setBoxPosition] = useState(0);

  useLayoutEffect(() => {
    // This runs BEFORE the browser paints anything on screen.
    // So the box appears directly in its final position — no flicker.
    setBoxPosition(300);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">With useLayoutEffect</h2>
      <p className="text-sm mb-4">
        When this component loads, the green box appears instantly at the right
        position (no flicker).
      </p>

      <div
        style={{
          width: "100px",
          height: "100px",
          background: "lightgreen",
          transform: `translateX(${boxPosition}px)`,
          transition: "transform 0.2s ease",
        }}
      />
    </div>
  );
};

export default WithUseLayoutEffect;
