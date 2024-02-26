import React from "react";

const MyComponent = (data) => {
  console.log(data);
  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default MyComponent;
