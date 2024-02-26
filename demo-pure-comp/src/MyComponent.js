import React from "react";

const MyComponent = ({ props }) => {
  console.log("Component rendered");
  return (
    <div>
      <h2>Component</h2>
      <p>Props: {props}</p>
    </div>
  );
};

const MyPureComponent = React.memo(({ props }) => {
  console.log("Pure Component rendered");
  return (
    <div>
      <h2>Pure Component</h2>
      <p>Props: {props}</p>
    </div>
  );
});

export { MyPureComponent, MyComponent };
