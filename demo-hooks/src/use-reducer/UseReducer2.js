import React, { useReducer } from "react";

const initialState = { count: 0, step: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
const UseReducer2 = () => {
  console.log("UseReducer2 running");

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeStep = (e) => {
    dispatch({ type: "setStep", payload: parseInt(e.target.value) });
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {state.count}</p>
      <input type="number" value={state.step} onChange={handleChangeStep} />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducer2;
