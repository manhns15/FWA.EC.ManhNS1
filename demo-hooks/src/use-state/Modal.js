import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Modal" : "Open Modal"}
      </button>
      {isOpen && <div>This is a modal</div>}
    </div>
  );
};

export default Modal;
