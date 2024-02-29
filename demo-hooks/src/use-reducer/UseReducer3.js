import React, { useCallback, useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

// Hàm reducer
function reducer(state, action) {
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
}
const UseReducer3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sử dụng useCallback để memoize hàm handleChangeStep
  const handleChangeStep = useCallback(
    (e) => {
      dispatch({ type: "setStep", payload: parseInt(e.target.value) });
    },
    [dispatch]
  );

  console.log("UseReducer3 running");

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {state.count}</p>
      <input
        type="number"
        value={state.step}
        onChange={handleChangeStep} // Sử dụng hàm đã memoize
      />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducer3;
