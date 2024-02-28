import React, { useCallback, useEffect, useState } from "react";

const UseCallBack = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const clickMe = () => {
      console.log("click me");
    };
    document.getElementById("myButton").addEventListener("click", clickMe);
    console.log("Counter re-rendered... click me", clickMe);

    return () => {};
  }, [count]);

  // Sử dụng useCallback để memoize hàm increment
  const increment = useCallback(() => {
    console.log("Incrementing...");
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    increment();
  }, [increment]);

  console.log("Counter re-rendered...");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button id="myButton" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseCallBack;
