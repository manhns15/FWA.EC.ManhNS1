// Button.js
import React from "react";
import { useEventContext } from "../context/EventContext";

function Button() {
  const { handleClick } = useEventContext();

  return <button onClick={handleClick}>Click me</button>;
}

export default Button;
