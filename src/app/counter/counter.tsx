"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {" "}
        + Click Me to Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        {" "}
        -Click Me to Decrease
      </button>
      <div>this is count {count}</div>
    </>
  );
}
