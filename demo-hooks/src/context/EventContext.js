// EventContext.js
import React, { createContext, useContext } from "react";

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const handleClick = () => {
    alert("Manh Nguyen Sy clicked!"); // Định nghĩa hàm xử lý sự kiện
  };

  return (
    <EventContext.Provider value={{ handleClick }}>
      {children}
    </EventContext.Provider>
  );
};
