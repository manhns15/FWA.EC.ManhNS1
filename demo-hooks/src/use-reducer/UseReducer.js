import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  console.log("reducer running...");
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer1 = () => {
  console.log("UseReducer1 rendered");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducer1;
