import "./App.css";
import { MyComponent, MyPureComponent } from "./MyComponent";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={() => incrementCounter()}>Increase Count</button>
      <MyComponent props={0} />
      <MyPureComponent props={0} />
    </div>
  );
}

export default App;
