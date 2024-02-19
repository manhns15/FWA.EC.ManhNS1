import React, { useState } from "react";

const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCount = () =>{
    setCount(0)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Count</button>&nbsp;
      <button onClick={resetCount}>Count</button>
    </div>
  );
};

export default FunctionComponent;
